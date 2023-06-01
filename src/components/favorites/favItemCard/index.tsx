import { FavItem } from "@/../../interfaces";
import React from "react";
import { removeFromFavorites } from "@/../../store/features/favoritesSlice";
import { useAppDispatch } from "@/../../store/store";
import s from "./index.module.scss";
import Image from "next/image";
import CrossButton from "@/utils/crossBtn";
import { Product } from "@/../../interfaces";

interface Props {
  product: Product;
}

const FavItemCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  // Check if product exists before using it
  if (!product) {
    return null;
  }

  return (
    <>
      <div className={s.cartItem_container}>
        <div className={s.img_name_wrapper}>
          <Image
            src={product.images[0]}
            width={100}
            height={100}
            alt={product.title}
            className={s.image}
          />
          <div>
            <div className={s.title}>{product.title.slice(0, 26)}</div>
            <div className={s.card_model}>
              {product.title.slice(28)}
            </div>
          </div>
        </div>

        <div className={s.item_price}>{product.price} грн</div>

        <CrossButton onClick={() => dispatch(removeFromFavorites(product))} />
      </div>
    </>
  );
};

export default FavItemCard;
