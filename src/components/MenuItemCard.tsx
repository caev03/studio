import Link from 'next/link';
import Image from 'next/image';
import type { MenuItem } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Link href={`/menu/${item.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="relative p-0">
          <Image
            src={item.image}
            alt={item.name}
            width={400}
            height={250}
            className="w-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="coffee pastry"
          />
          {item.featured && (
            <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">Featured</Badge>
          )}
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-headline tracking-tight">{item.name}</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0">
          <p className="text-lg font-semibold font-headline text-accent-foreground/80">${item.price.toFixed(2)}</p>
          <div className="flex items-center text-sm font-medium text-accent transition-transform duration-300 group-hover:translate-x-1">
            View <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
