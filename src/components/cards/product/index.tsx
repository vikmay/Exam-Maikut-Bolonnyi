import React from "react";
import Image from "next/image";
import AddToCartBtn from "@/components/cart/addToCart";
import s from "./index.module.scss";
import { Product } from "@/../../interfaces";

const ProductCard = (props: any) => {
  const { product,id } = props;
  return (
    <>
    <div className={s.card_container}>
      <Image
        src={product?.images[0]}
        alt={product?.title}
        width={200}
        height={200}
      />
      <div>{product?.title}</div>
      <div>{product?.price + 'грн'}</div>
      <AddToCartBtn product={product} id={id} />
      
      </div>
    </>
  );
};

export default ProductCard;
