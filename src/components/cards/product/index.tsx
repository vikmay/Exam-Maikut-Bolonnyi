import React from "react";
import Image from "next/image";
import AddToCartBtn from "@/components/cart/addToCart";
import s from "./index.module.scss";
import { Product } from "@/../../interfaces";

const ProductCard = (props: any) => {
  const { product, id } = props;
  return (
    <>
      <div className={s.card_wrapper}>
        <div className={s.card_container}>
          <Image
            src={product?.images[0]}
            alt={product?.title}
            width={200}
            height={200}
          />
          <div>{product?.title}</div>
          <div className={s.card__producer}>{'_'+ product?.producer}</div>
          <div className={s.price_cart_container}>
            <div>
              <div className={s.card__price}>{product?.price + "грн"}</div>
              <span className={s.on_stock}>В наявності</span>
            </div>
            <AddToCartBtn product={product} id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
