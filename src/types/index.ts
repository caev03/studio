export interface MenuItem {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: 'coffee' | 'tea' | 'pastries';
  featured?: boolean;
}

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
}

export interface Address {
  id: string;
  label: string;
  address: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}
