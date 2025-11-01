'use server';

import { generateStoryFromImageAndDescription } from '@/ai/flows/generate-story-from-image-and-description';
import { z } from 'zod';

const FormSchema = z.object({
  description: z.string().min(1, 'Description is required.'),
  image: z
    .instanceof(File, { message: 'Image is required.' })
    .refine((file) => file.size > 0, 'Image is required.'),
});

export async function generateStoryAction(formData: FormData) {
  try {
    const validatedFields = FormSchema.safeParse({
      description: formData.get('description'),
      image: formData.get('image'),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.errors.map((e) => e.message).join(', '),
      };
    }

    const { description, image } = validatedFields.data;

    const imageBuffer = await image.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    const photoDataUri = `data:${image.type};base64,${imageBase64}`;

    const result = await generateStoryFromImageAndDescription({
      description,
      photoDataUri,
    });

    if (!result || !result.story) {
        return { error: 'The AI could not generate a story. Please try a different image or description.'}
    }

    return { story: result.story };
  } catch (error) {
    console.error('Error generating story:', error);
    return { error: 'An unexpected error occurred on the server. Please try again.' };
  }
}
