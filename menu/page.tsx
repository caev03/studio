import { menuItems } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MenuItemCard } from '@/components/MenuItemCard';

export default function MenuPage() {
  const featured = menuItems.filter(item => item.featured);
  const coffee = menuItems.filter(item => item.category === 'coffee');
  const tea = menuItems.filter(item => item.category === 'tea');
  const pastries = menuItems.filter(item => item.category === 'pastries');

  return (
    <div className="p-4 sm:p-6 animate-in fade-in duration-500">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-headline text-foreground">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Handcrafted with care, just for you.
        </p>
      </header>
      
      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-primary/10">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="coffee">Coffee</TabsTrigger>
          <TabsTrigger value="tea">Tea</TabsTrigger>
          <TabsTrigger value="pastries">Pastries</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="coffee">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coffee.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tea">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tea.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pastries">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastries.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
