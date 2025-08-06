import { menuItems } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type ProductDetailPageProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const item = menuItems.find((p) => p.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="animate-in fade-in duration-500">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
          data-ai-hint="coffee pastry drink"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <Button asChild variant="ghost" size="icon" className="absolute top-4 left-4 bg-background/50 hover:bg-background/80">
          <Link href="/menu">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Menu</span>
          </Link>
        </Button>
      </div>

      <div className="p-6 -mt-16 space-y-6">
        <div className="relative bg-card p-6 rounded-lg shadow-lg">
          <header className="text-center mb-4">
            <Badge variant="outline" className="mb-2 capitalize bg-transparent">{item.category}</Badge>
            <h1 className="text-4xl font-headline text-foreground">{item.name}</h1>
            <p className="text-2xl font-headline text-primary mt-2">${item.price.toFixed(2)}</p>
          </header>
          
          <Separator className="my-6" />

          <article className="prose prose-stone dark:prose-invert max-w-none text-foreground">
            <p className="text-lg leading-relaxed">
              {item.longDescription}
            </p>
          </article>
        </div>
        
        <Button size="lg" className="w-full font-headline text-lg">Add to Order</Button>
      </div>
    </div>
  );
}
