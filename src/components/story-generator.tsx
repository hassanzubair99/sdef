'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

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
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Download, Loader2, Sparkles } from 'lucide-react';

const STATIC_IMAGE_URL = 'https://i.ibb.co/5gd7rTpv/Screenshot-2025-11-01-132005.png';

const formSchema = z.object({
  description: z.string().min(10, 'Please write at least 10 characters.').max(500, 'Description cannot exceed 500 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

type View = 'form' | 'loading' | 'result';

export default function StoryGenerator() {
  const [view, setView] = useState<View>('form');
  const [story, setStory] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: '' },
    mode: 'onTouched',
  });

  const onSubmit = async (values: FormValues) => {
    setView('loading');
    const result = await generateStoryAction(values.description);

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
    setView('form');
  };

  return (
    <div className="w-full max-w-4xl">
        {view === 'form' && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <Card>
                <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">Picture Story</CardTitle>
                <CardDescription className="text-center">Tell a story about her eyes.</CardDescription>
                </CardHeader>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                          <div className="w-full aspect-square relative">
                              <Image
                              src={STATIC_IMAGE_URL}
                              alt="A beautiful picture of eyes"
                              fill
                              className="rounded-md object-cover"
                              data-ai-hint="eyes close-up"
                              />
                          </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                          <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Your Paragraph</FormLabel>
                                  <FormControl>
                                  <Textarea
                                      placeholder="Describe her eyes, the memory, the feeling..."
                                      className="min-h-[300px] resize-none rounded-lg shadow-inner"
                                      {...field}
                                  />
                                  </FormControl>
                                  <FormMessage />
                              </FormItem>
                              )}
                          />
                        </motion.div>
                      </div>
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
        
        {view === 'result' && story && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-4xl space-y-8">
              <Card className="overflow-hidden shadow-xl">
                  <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                      <div className="relative aspect-square">
                        <Image src={STATIC_IMAGE_URL} alt="Your uploaded picture" fill className="object-cover" data-ai-hint="eyes close-up" />
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
