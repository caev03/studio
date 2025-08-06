'use client';

import { useState } from 'react';
import Image from 'next/image';
import { userProfile, orderHistory, savedAddresses } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MapPin, Package, Sparkles } from 'lucide-react';
import { getRecommendationsAction } from './actions';
import { Recommendations } from './recommendations';
import type { RecommendNewItemsOutput } from '@/ai/flows/recommend-new-items';

export default function ProfilePage() {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState<RecommendNewItemsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setRecommendations(null);

    const pastOrdersString = JSON.stringify(orderHistory.map(o => o.items.map(i => i.name)).flat());
    const result = await getRecommendationsAction({
      pastOrders: pastOrdersString,
      customerPreferences: preferences,
    });

    setIsLoading(false);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.recommendations) {
      setRecommendations(result.recommendations);
       toast({
        title: 'Success!',
        description: 'We found some new items you might love.',
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-8 animate-in fade-in duration-500">
      <header className="flex items-center gap-4">
        <Avatar className="h-20 w-20 border-2 border-primary">
          <AvatarImage src={userProfile.avatar} alt={userProfile.name} data-ai-hint="person portrait" />
          <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-headline text-foreground">{userProfile.name}</h1>
          <p className="text-muted-foreground">{userProfile.email}</p>
        </div>
      </header>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Sparkles className="text-primary" />
            Discover Your Next Favorite
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Tell us what you like (e.g., "fruity flavors", "strong coffee", "not too sweet") and our AI will suggest something new for you to try!
          </p>
          <Textarea
            placeholder="Enter your taste preferences here..."
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            className="bg-background"
          />
          <Button onClick={handleGetRecommendations} disabled={isLoading} className="w-full">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {isLoading ? 'Thinking...' : 'Get Recommendations'}
          </Button>
          {recommendations && (
             <div className="pt-4">
              <Recommendations items={recommendations} />
             </div>
          )}
        </CardContent>
      </Card>


      <div className="space-y-4">
        <h2 className="text-2xl font-headline">Your Details</h2>
        <Accordion type="single" collapsible className="w-full" defaultValue="orders">
          <AccordionItem value="orders">
            <AccordionTrigger className="text-lg font-headline"><Package className="inline-block mr-2 h-5 w-5 text-accent" />Order History</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                {orderHistory.map(order => (
                  <Card key={order.id} className="bg-card/50">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <Separator className="my-2" />
                      <ul className="list-disc list-inside text-muted-foreground">
                        {order.items.map(item => (
                          <li key={item.name}>{item.quantity}x {item.name}</li>
                        ))}
                      </ul>
                      <p className="text-right font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="addresses">
            <AccordionTrigger className="text-lg font-headline"><MapPin className="inline-block mr-2 h-5 w-5 text-accent" />Saved Addresses</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                {savedAddresses.map(addr => (
                  <Card key={addr.id} className="bg-card/50">
                    <CardContent className="p-4">
                      <p className="font-semibold">{addr.label}</p>
                      <p className="text-muted-foreground">{addr.address}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
