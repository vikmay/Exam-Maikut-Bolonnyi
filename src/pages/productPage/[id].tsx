import { useRouter } from "next/router";
import productsList from "@/data/products/products.json";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductPage: React.FC = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!router.isReady) return; // Only execute when the router's query params are ready

    const id = router.query.id;
    const productData = productsList.find(
      (product) => product.id.toString() === id
    );
    setProduct(productData);
  }, [router.isReady, router.query]);

  // Render your product details here...
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      {/* Display product details */}
      <Image
        src={product?.images[0]}
        alt={product?.title}
        width={200}
        height={200}
      />
      <h1>{product?.title}</h1>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductPage;
