export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  weight: string;
  ingredients: Ingredient[];
  nutrition?: Nutrition;
  allergens?: string[];
  storageInfo?: string;
  shelfLife?: string;
  reviews?: Review[];
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  image: string;
  reason: string;
}

export interface Nutrition {
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  calories: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface JourneyMilestone {
  id: string;
  label: string;
  title: string;
  description: string;
  image?: string;
}
