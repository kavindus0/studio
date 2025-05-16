
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
  `,
  config: {
    // Explicitly set safety settings for all supported categories to be more permissive for debugging
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
      // Note: HARM_CATEGORY_CIVIC_INTEGRITY is not supported by gemini-2.0-flash and should not be included.
    ],
  },
});

const virtualAssistantFlow = ai.defineFlow(
  {
    name: 'virtualAssistantFlow',
    inputSchema: VirtualAssistantInputSchema,
    outputSchema: VirtualAssistantOutputSchema,
  },
  async (input: VirtualAssistantInput): Promise<VirtualAssistantOutput> => {
    console.log('Virtual assistant flow called with input:', input);
    try {
      const {output: promptOutput} = await prompt(input);

      console.log('Raw output from prompt:', promptOutput);

      if (!promptOutput || typeof promptOutput.response !== 'string' || promptOutput.response.trim() === '') {
        console.error('Virtual assistant prompt did not return a valid or non-empty response string. Prompt output was:', promptOutput);
        return { response: "I'm sorry, I couldn't generate a response for that. Please try a different question." };
      }
      return promptOutput;
    } catch (error: any) {
      console.error('Error during virtualAssistantFlow execution. Type:', typeof error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error name:', error.name);
        console.error('Error stack:', error.stack);
      } else {
        // Attempt to stringify if it's not a standard Error object
        try {
          console.error('Error object (not an Error instance):', JSON.stringify(error, null, 2));
        } catch (stringifyError) {
          console.error('Error object (not an Error instance, and could not be stringified):', error);
        }
      }
      
      // You might want to check for specific error structures from Google AI / Genkit here
      // For example, if (error.details) console.error('Error details:', error.details);

      return { response: "An unexpected error occurred while I was trying to understand that. Please try again." };
    }
  }
);
