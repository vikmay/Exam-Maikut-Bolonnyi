import React from "react";
import Image from "next/image";
import AddToCartBtn from "@/components/cart/addToCart";
import s from "./index.module.scss";
import AddToFavBtn from "@/components/favorites/addToFav";
import Link from "next/link";

const ProductCard = (props: any) => {
  const { product, id } = props;

  const NewLabel = () => {
    if (product?.isNew) {
      return <span className={s.new_label}>НОВЕ</span>;
    }
    return null;
  };

  return (
    <>
      <div className={s.card_wrapper}>
        <div className={s.card_container}>
          <div className={s.new_fav_container}>
            {NewLabel()}
            <AddToFavBtn product={product} id={id} />
          </div>

          <Link className={s.img_wrapper} href={`/catalog/${product.id}`}>
            {" "}
            <Image
              className={s.card_image}
              src={product?.images[0]}
              alt={product?.title}
              width={200}
              height={200}
            />
          </Link>
          <Link href={`/catalog/${product.id}`}>
            {" "}
            <div className={s.card_title}>{product?.title.slice(0, 26)}</div>
            <div className={s.card_model}>{product?.title.slice(28)}</div>
            <div className={s.card__producer}>_{product?.producer}</div>
          </Link>
          <div className={s.price_cart_container}>
            <div>
              <Link href={`/catalog/${product.id}`}>
                {" "}
                <div className={s.card__price}>{product?.price + "грн"}</div>
                <span className={s.on_stock}>В наявності</span>
              </Link>
            </div>
            <AddToCartBtn product={product} id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
