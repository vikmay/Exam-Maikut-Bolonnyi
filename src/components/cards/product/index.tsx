import React from "react";
import Image from "next/image";
import AddToCartBtn from "@/components/cart/addToCart";
import s from "./index.module.scss";

const ProductCard = (props: any) => {
  const { product } = props;
  return (
    <>
    <div className={s.card_container}>
      <Image
        src={product?.images[0]}
        alt={product?.title}
        width={200}
        height={200}
      />
      <div>ProductCard: {product?.title}</div>
      <div>ProductCard: {product?.price}</div>
      <AddToCartBtn product={product} />
      </div>
    </>
  );
};

export default ProductCard;
