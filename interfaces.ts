export interface Product {
  producer: string;
  id: number;
  title: string;
  price: any;
  description: string;
  images: string[];
  features: string[];
  isFavorite?: boolean;
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
