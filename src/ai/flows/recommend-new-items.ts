'use server';

/**
 * @fileOverview A flow for recommending new menu items to returning customers based on their past orders and preferences.
 *
 * - recommendNewItems - A function that handles the recommendation process.
 * - RecommendNewItemsInput - The input type for the recommendNewItems function.
 * - RecommendNewItemsOutput - The return type for the recommendNewItems function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendNewItemsInputSchema = z.object({
  pastOrders: z.string().describe('A list of the customer\'s past orders, as a JSON string.'),
  customerPreferences: z.string().describe('A description of the customer\'s food and drink preferences.'),
});
export type RecommendNewItemsInput = z.infer<typeof RecommendNewItemsInputSchema>;

const MenuItemSchema = z.object({
  name: z.string().describe('The name of the menu item.'),
  description: z.string().describe('A brief description of the menu item.'),
  ingredients: z.string().describe('A list of the ingredients in the menu item.'),
  qualities: z.string().describe('The qualities or attributes of the menu item (e.g., sweet, savory, spicy).'),
});

const RecommendNewItemsOutputSchema = z.array(MenuItemSchema).describe('A list of recommended menu items.');
export type RecommendNewItemsOutput = z.infer<typeof RecommendNewItemsOutputSchema>;

export async function recommendNewItems(input: RecommendNewItemsInput): Promise<RecommendNewItemsOutput> {
  return recommendNewItemsFlow(input);
}

const rankItems = ai.defineTool(
  {
    name: 'rankItems',
    description: 'Ranks menu items based on the customer\'s past orders and preferences, highlighting ingredients or qualities they have appreciated in the past.',
    inputSchema: z.object({
      menuItems: z.array(MenuItemSchema).describe('A list of menu items to rank.'),
      customerPreferences: z.string().describe('A description of the customer\'s food and drink preferences.'),
      pastOrders: z.string().describe('A list of the customer\'s past orders.'),
    }),
    outputSchema: z.array(MenuItemSchema).describe('A list of ranked menu items.'),
  },
  async input => {
    // This is where the ranking logic would go.
    // In a real application, this would involve calling a service or API
    // that uses machine learning to rank the menu items based on the customer's preferences.
    // For this example, we'll just return the menu items in the same order they were received.
    return input.menuItems;
  }
);

const recommendNewItemsPrompt = ai.definePrompt({
  name: 'recommendNewItemsPrompt',
  tools: [rankItems],
  input: {schema: RecommendNewItemsInputSchema},
  output: {schema: RecommendNewItemsOutputSchema},
  prompt: `You are a personal recommendation system for Cafe AURA.
Given a customer's past orders and preferences, recommend new menu items that they might enjoy.

Past Orders: {{{pastOrders}}}
Customer Preferences: {{{customerPreferences}}}

Consider the ingredients, qualities, and descriptions of the menu items when making your recommendations.

Use the rankItems tool to rank the menu items based on the customer's preferences.

Return a JSON array of recommended menu items.
`,
});

const recommendNewItemsFlow = ai.defineFlow(
  {
    name: 'recommendNewItemsFlow',
    inputSchema: RecommendNewItemsInputSchema,
    outputSchema: RecommendNewItemsOutputSchema,
  },
  async input => {
    const {output} = await recommendNewItemsPrompt(input);
    return output!;
  }
);
