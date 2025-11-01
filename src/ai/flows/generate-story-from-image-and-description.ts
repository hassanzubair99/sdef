'use server';
/**
 * @fileOverview Generates a short story or poem inspired by an image and a text description.
 *
 * - generateStoryFromImageAndDescription - A function that generates a story from an image and description.
 * - GenerateStoryInput - The input type for the generateStoryFromImageAndDescription function.
 * - GenerateStoryOutput - The return type for the generateStoryFromImageAndDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoryInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of your girlfriend's eyes, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('A text description about her eyes.'),
});
export type GenerateStoryInput = z.infer<typeof GenerateStoryInputSchema>;

const GenerateStoryOutputSchema = z.object({
  story: z.string().describe('A short story or poem inspired by the image and description of her eyes.'),
});
export type GenerateStoryOutput = z.infer<typeof GenerateStoryOutputSchema>;

export async function generateStoryFromImageAndDescription(input: GenerateStoryInput): Promise<GenerateStoryOutput> {
  return generateStoryFlow(input);
}

const storyPrompt = ai.definePrompt({
  name: 'storyPrompt',
  input: {schema: GenerateStoryInputSchema},
  output: {schema: GenerateStoryOutputSchema},
  prompt: `You are a creative writer who specializes in writing short, heartfelt stories and poems about the profound connection one feels when looking into their girlfriend's eyes.

You will receive a picture of her eyes and a description of them. You will use this information to generate a short story or poem inspired by the image and description.

Description: {{{description}}}
Photo: {{media url=photoDataUri}}

Please write a story or poem that is no more than 200 words. Focus on the emotions and thoughts that her eyes evoke.`,
});

const generateStoryFlow = ai.defineFlow(
  {
    name: 'generateStoryFlow',
    inputSchema: GenerateStoryInputSchema,
    outputSchema: GenerateStoryOutputSchema,
  },
  async input => {
    const {output} = await storyPrompt(input);
    return output!;
  }
);
