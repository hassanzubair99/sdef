'use server';

import { generateStoryFromImageAndDescription } from '@/ai/flows/generate-story-from-image-and-description';
import { z } from 'zod';

const FormSchema = z.string().min(1, 'Description is required.');
const STATIC_IMAGE_URL = 'https://storage.googleapis.com/studiopicturestory/eyes.jpeg';


export async function generateStoryAction(description: string) {
  try {
    const validatedDescription = FormSchema.safeParse(description);

    if (!validatedDescription.success) {
      return {
        error: validatedDescription.error.errors.map((e) => e.message).join(', '),
      };
    }

    const result = await generateStoryFromImageAndDescription({
      description: validatedDescription.data,
      photoDataUri: STATIC_IMAGE_URL,
    });

    if (!result || !result.story) {
        return { error: 'The AI could not generate a story. Please try a different description.'}
    }

    return { story: result.story };
  } catch (error) {
    console.error('Error generating story:', error);
    return { error: 'An unexpected error occurred on the server. Please try again.' };
  }
}
