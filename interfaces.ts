export interface Feature {
  label: string;
  value: string;
}

export interface Product {
  producer: string;
  id: number;
  title: string;
  price: string;
  description: string;
  images: string[];
  features: Feature[];
  isFavorite?: boolean;
  colors?: string[];
  
}

export interface CartItem {
  product: Product;
  qty: number;
}
export interface FavItem {
  product: Product;
  qty: number;
}

export interface Props {
  className?: string;
}
