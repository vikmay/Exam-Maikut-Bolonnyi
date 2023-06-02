import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { category, id } = router.query;

  return (
    <div>
      <p>Category: {category}</p>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductPage;
