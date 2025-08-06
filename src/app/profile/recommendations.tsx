import type { RecommendNewItemsOutput } from '@/ai/flows/recommend-new-items';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

interface RecommendationsProps {
  items: RecommendNewItemsOutput;
}

export function Recommendations({ items }: RecommendationsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-headline flex items-center gap-2">
        <Lightbulb className="text-primary" />
        Personalized Recommendations
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="bg-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline">{item.name}</CardTitle>
              <CardDescription className="text-muted-foreground">{item.qualities}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
              <p className="text-sm text-muted-foreground mt-2"><strong>Ingredients:</strong> {item.ingredients}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
