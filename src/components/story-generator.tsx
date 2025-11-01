'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AnimatePresence, motion } from 'framer-motion';

import { generateStoryAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Download, Loader2, Sparkles, Upload } from 'lucide-react';

const formSchema = z.object({
  description: z.string().min(10, 'Please write at least 10 characters.').max(500, 'Description cannot exceed 500 characters.'),
  image: z
    .any()
    .refine((files) => files?.length === 1, 'An image is required.')
    .refine((files) => files?.[0]?.size <= 5000000, `Max file size is 5MB.`)
    .refine(
      (files) => ['image/jpeg', 'image/png', 'image/webp'].includes(files?.[0]?.type),
      '.jpg, .png, and .webp files are accepted.'
    ),
});

type FormValues = z.infer<typeof formSchema>;

type View = 'form' | 'loading' | 'result';

export default function StoryGenerator() {
  const [view, setView] = useState<View>('form');
  const [story, setStory] = useState<string | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: '' },
    mode: 'onTouched',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setView('loading');

    const formData = new FormData();
    formData.append('description', values.description);
    formData.append('image', values.image[0]);

    const result = await generateStoryAction(formData);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: result.error,
      });
      setView('form');
    } else {
      setStory(result.story!);
      setView('result');
    }
  };

  const downloadStory = () => {
    if (!story) return;
    const blob = new Blob([story], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'picture-story.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    form.reset();
    setStory(null);
    setImageDataUrl(null);
    setView('form');
  };

  return (
    <div className="w-full max-w-2xl">
        {view === 'form' && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <Card>
                <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">Picture Story</CardTitle>
                <CardDescription className="text-center">Tell a story from a single picture.</CardDescription>
                </CardHeader>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <CardContent className="space-y-6">
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Picture</FormLabel>
                            <FormControl>
                            <div className="relative">
                                <Input
                                type="file"
                                accept="image/png, image/jpeg, image/webp"
                                className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                                onChange={(e) => {
                                    field.onChange(e.target.files);
                                    handleImageChange(e);
                                }}
                                />
                                <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 transition-colors hover:border-primary/50">
                                {imageDataUrl ? (
                                    <Image
                                    src={imageDataUrl}
                                    alt="Preview"
                                    width={400}
                                    height={225}
                                    className="h-full w-full rounded-md object-contain"
                                    />
                                ) : (
                                    <div className="text-center text-muted-foreground">
                                    <Upload className="mx-auto mb-2 h-10 w-10" />
                                    <p className="font-medium">Click or drag to upload</p>
                                    <p className="text-sm">PNG, JPG, or WEBP (Max 5MB)</p>
                                    </div>
                                )}
                                </div>
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="Describe the memory, the person, the feeling..."
                                className="min-h-[100px] resize-none"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    </CardContent>
                    <CardFooter>
                    <Button type="submit" size="lg" className="w-full" disabled={!form.formState.isValid}>
                        <Sparkles className="mr-2 h-5 w-5" /> Generate Story
                    </Button>
                    </CardFooter>
                </form>
                </Form>
            </Card>
            </motion.div>
        )}

        {view === 'loading' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center gap-4 py-20 text-center">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
            <h2 className="font-headline text-2xl">Weaving your story...</h2>
            <p className="text-muted-foreground">The AI is composing a little magic for you.</p>
          </motion.div>
        )}
        
        {view === 'result' && story && imageDataUrl && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-4xl space-y-8">
              <Card className="overflow-hidden shadow-xl">
                  <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                      <div className="relative aspect-square">
                        <Image src={imageDataUrl} alt="Your uploaded picture" fill className="object-cover" />
                      </div>
                      <div className="flex flex-col p-8 md:p-10">
                        <h2 className="font-headline text-3xl lg:text-4xl mb-6 border-b pb-4">Your Story</h2>
                        <div className="prose prose-lg text-foreground flex-grow">
                          <p className="whitespace-pre-wrap leading-relaxed">{story}</p>
                        </div>
                      </div>
                  </div>
                  </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" onClick={downloadStory}>
                    <Download className="mr-2 h-5 w-5" />
                    Download Story
                  </Button>
                  <Button size="lg" variant="outline" onClick={reset}>
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Create Another
                  </Button>
              </div>
            </motion.div>
        )}
    </div>
  );
}
