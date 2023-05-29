export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: any;
  features: string[];
}

export interface CartItem {
  product: Product;
  qty: number;

}
