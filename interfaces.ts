export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  features: string[];
}

export interface CartItem {
  product: Product;
  qty: number;

}
