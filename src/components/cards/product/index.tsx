import React from "react";
import Image from "next/image";
// 💬 Styles //
import s from "../product/index.module.scss";
// 💬 Components //
import Likes from "@/components/likes";
const ProductCard = (props: any) => {
  const { product } = props;
  return (
    <>
      <div className={s.product__card}>
        <div className={s.likes__img}>
          <Likes />
        </div>
        <Image
          className={s.img__card}
          src={product?.images[0]}
          alt={product?.title}
          width={200}
          height={200}
        />
        <div className={s.product__card_title}> {product?.title}</div>

        <div className={s.product__card_producer}>{product?.producer}</div>
        <div className={s.product__card_price}>{product?.price}грн</div>
      </div>
    </>
  );
};

export default ProductCard;
