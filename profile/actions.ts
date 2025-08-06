"use server";

import { recommendNewItems } from '@/ai/flows/recommend-new-items';
import { z } from 'zod';

const ActionInputSchema = z.object({
  pastOrders: z.string(),
  customerPreferences: z.string(),
});

export async function getRecommendationsAction(input: z.infer<typeof ActionInputSchema>) {
  const parsedInput = ActionInputSchema.safeParse(input);
  if (!parsedInput.success) {
    return { error: 'Invalid input.' };
  }

  try {
    const recommendations = await recommendNewItems(parsedInput.data);
    return { recommendations };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to get recommendations. Please try again later.' };
  }
}
