import type { MenuItem, UserProfile, Order, Address } from '@/types';

export const menuItems: MenuItem[] = [
  {
    id: 'classic-drip',
    name: 'Classic Drip',
    description: 'Rich & balanced, our house blend.',
    longDescription: 'Our Classic Drip is a carefully selected blend of beans from Latin America, roasted to perfection to bring out notes of chocolate, nuts, and a hint of citrus. A comforting and reliable choice for any time of day.',
    price: 3.50,
    image: 'https://placehold.co/600x400.png',
    category: 'coffee',
    featured: true,
  },
  {
    id: 'aura-latte',
    name: 'Aura Latte',
    description: 'Espresso with steamed milk & lavender.',
    longDescription: 'The Aura Latte is our signature drink, featuring a shot of our finest espresso combined with perfectly steamed milk and a subtle hint of house-made lavender syrup. It\'s a floral, creamy, and dreamy experience.',
    price: 5.00,
    image: 'https://placehold.co/600x400.png',
    category: 'coffee',
    featured: true,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'Smooth, bold, and steeped for 18 hours.',
    longDescription: 'Our Cold Brew is steeped for 18 hours in cold water, resulting in a coffee that is incredibly smooth, low in acidity, and packed with a naturally sweet, chocolatey flavor. Served over ice, it\'s the ultimate refreshment.',
    price: 4.50,
    image: 'https://placehold.co/600x400.png',
    category: 'coffee',
  },
  {
    id: 'matcha-me-up',
    name: 'Matcha Me Up',
    description: 'Ceremonial grade matcha, your way.',
    longDescription: 'Experience the vibrant and earthy flavors of our ceremonial grade matcha from Uji, Japan. We prepare it traditionally with a bamboo whisk and can serve it hot with frothed milk or iced for a cool treat.',
    price: 5.50,
    image: 'https://placehold.co/600x400.png',
    category: 'tea',
    featured: true,
  },
  {
    id: 'chai-bliss',
    name: 'Chai Bliss',
    description: 'Spiced black tea with steamed milk.',
    longDescription: 'Our Chai Bliss is a fragrant blend of black tea and aromatic spices like cinnamon, cardamom, and ginger. It\'s brewed strong and combined with steamed milk for a creamy, comforting, and soul-warming beverage.',
    price: 4.75,
    image: 'https://placehold.co/600x400.png',
    category: 'tea',
  },
  {
    id: 'almond-croissant',
    name: 'Almond Croissant',
    description: 'Flaky, buttery, with a sweet almond filling.',
    longDescription: 'Our Almond Croissant is a masterpiece of pastry. A buttery, flaky croissant is filled with a rich almond frangipane, topped with more frangipane and sliced almonds, then baked to golden perfection and dusted with powdered sugar.',
    price: 4.25,
    image: 'https://placehold.co/600x400.png',
    category: 'pastries',
    featured: true,
  },
  {
    id: 'vegan-banana-bread',
    name: 'Vegan Banana Bread',
    description: 'Moist, delicious, and plant-based.',
    longDescription: 'A slice of pure comfort. Our Vegan Banana Bread is incredibly moist, made with ripe bananas, a touch of cinnamon, and plant-based ingredients. Perfect for a wholesome snack.',
    price: 3.75,
    image: 'https://placehold.co/600x400.png',
    category: 'pastries',
  },
];

export const userProfile: UserProfile = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: 'https://placehold.co/100x100.png',
};

export const orderHistory: Order[] = [
  {
    id: 'ORDER-003',
    date: '2024-07-15',
    items: [{ name: 'Aura Latte', quantity: 1 }, { name: 'Almond Croissant', quantity: 1 }],
    total: 9.25,
  },
  {
    id: 'ORDER-002',
    date: '2024-07-08',
    items: [{ name: 'Classic Drip', quantity: 2 }],
    total: 7.00,
  },
  {
    id: 'ORDER-001',
    date: '2024-06-29',
    items: [{ name: 'Cold Brew', quantity: 1 }],
    total: 4.50,
  },
];

export const savedAddresses: Address[] = [
  {
    id: 'ADDR-1',
    label: 'Home',
    address: '123 Artisan Way, Flavor Town, CA 90210',
  },
  {
    id: 'ADDR-2',
    label: 'Work',
    address: '456 Design District, Creative City, CA 90211',
  },
];
