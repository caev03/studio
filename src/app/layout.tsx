import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BottomNavBar } from '@/components/BottomNavBar';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'AURA Cafe Companion',
  description: 'Your companion app for Café AURA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-stone-900')}>
        <div className="relative flex flex-col h-dvh max-w-md mx-auto bg-background border-x">
          <main className="flex-1 overflow-y-auto pb-20">{children}</main>
          <BottomNavBar />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
