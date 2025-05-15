// virtual-assistant.ts
'use server';

/**
 * @fileOverview Implements an AI-powered virtual assistant for the ECS Open Day.
 *
 * - virtualAssistant - A function that handles user queries and provides responses.
 * - VirtualAssistantInput - The input type for the virtualAssistant function.
 * - VirtualAssistantOutput - The return type for the virtualAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VirtualAssistantInputSchema = z.object({
  query: z.string().describe('The user query about the ECS Open Day.'),
});
export type VirtualAssistantInput = z.infer<typeof VirtualAssistantInputSchema>;

const VirtualAssistantOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user query.'),
});
export type VirtualAssistantOutput = z.infer<typeof VirtualAssistantOutputSchema>;

export async function virtualAssistant(input: VirtualAssistantInput): Promise<VirtualAssistantOutput> {
  return virtualAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'virtualAssistantPrompt',
  input: {schema: VirtualAssistantInputSchema},
  output: {schema: VirtualAssistantOutputSchema},
  prompt: `You are a virtual assistant providing information about the Electronics and Computer Science (ECS) Open Day at the University of Kelaniya.

  Answer the following question based on the context provided and your general knowledge. If you don't know the answer, say so.

  Context: The ECS Open Day includes information on the schedule, speakers, registration process, and department information. The event is designed to provide insights into the world of ECS, showcase the curriculum, and allow visitors to meet faculty.

  Question: {{{query}}}
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const virtualAssistantFlow = ai.defineFlow(
  {
    name: 'virtualAssistantFlow',
    inputSchema: VirtualAssistantInputSchema,
    outputSchema: VirtualAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
