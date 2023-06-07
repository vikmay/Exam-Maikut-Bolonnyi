import { useRouter } from "next/router";
import productsList from "@/data/products/products.json";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  images: string[];
  // Add more properties here
}

const ProductPage: React.FC = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const { id } = router.query;
    const productData = productsList.find(
      (product) => product.id.toString() === id
    );

    if (productData) {
      setProduct(product);
    }
  }, [router.isReady, router.query]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={200}
        height={200}
      />
      <h1>{product.title}</h1>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductPage;
