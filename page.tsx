import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 space-y-8 animate-in fade-in duration-500">
      <header className="text-center space-y-4 w-full">
        <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                fill="currentColor"
                fillOpacity="0.3"
              />
              <path
                d="M12 4c-2.97 0-5.58 1.66-6.96 4.05C6.18 10.19 7.69 12 10 12c2.76 0 5-2.24 5-5 0-.79-.19-1.54-.53-2.22A7.96 7.96 0 0012 4zM12 14c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z"
                fill="currentColor"
              />
            </svg>
        </div>
        <h1 className="text-4xl font-headline text-foreground">Welcome to Café AURA</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Your moment of calm and craftsmanship in a cup. Discover our passion for specialty coffee and artisanal pastries.
        </p>
      </header>
      
      <div className="w-full">
        <Image
          src="https://placehold.co/600x400.png"
          alt="Interior of Café AURA"
          width={600}
          height={400}
          className="rounded-lg object-cover w-full shadow-lg"
          data-ai-hint="coffee shop interior"
          priority
        />
      </div>

      <div className="w-full">
        <Button asChild size="lg" className="w-full font-headline text-lg">
          <Link href="/menu">
            Explore the Menu <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <Separator />

      <Card className="w-full bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Visit Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 mt-1 text-accent" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-muted-foreground">123 Artisan Way, Flavor Town, CA</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-5 w-5 mt-1 text-accent" />
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="text-muted-foreground">Mon - Fri: 7am - 6pm</p>
              <p className="text-muted-foreground">Sat - Sun: 8am - 5pm</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
