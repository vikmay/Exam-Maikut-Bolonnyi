import { CartItem } from "@/../../interfaces";
import React from "react";
import { decrement, increment, remove } from "@/../../store/features/cartSlice";
import { useAppDispatch } from "@/../../store/store";
import QtyBtn from "../qtyBtn";
import s from "./index.module.scss";
import Image from "next/image";

interface Props {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={s.cartItem_container}>
        <Image
          src={cartItem.product?.images[0]}
          width={100}
          height={100}
          alt={cartItem.product.title}
          className={s.image}
        />
        <div>
          <div className={s.title}>{cartItem.product.title.slice(0, 26)}</div>
          <div className={s.card_model}>{cartItem.product.title.slice(28)}</div>
        </div>

        <p className={s.item_price}>{cartItem.product.price} $</p>
        <p>&#xd7;</p>
        <QtyBtn
          qty={cartItem.qty}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
          className={s.qtyBtn_container}
          increaseClassName={s.increase_btn}
          decreaseClassName={s.decrease_btn}
        />

        <p className="text-center font-bold text-xl">
          {(cartItem.qty * cartItem.product.price).toFixed(2)} $
        </p>
        <button
          onClick={() => dispatch(remove(cartItem.product))}
          className={s.remove_btn}
        >
          X
        </button>
      </div>
    </>
  );
};

export default CartItemCard;
