import { CartItem } from "@/../../interfaces";
import React from "react";
import { decrement, increment, remove } from "@/../../store/features/cartSlice";
import { useAppDispatch } from "@/../../store/store";
import QtyBtn from "../qtyBtn";
import s from "./index.module.scss";
import Image from "next/image";
import CrossButton from "@/utils/crossBtn";

interface Props {
  cartItem: CartItem;

}

const CartItemCard = ({ cartItem}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={s.cartItem_container}>
        <div className={s.img_name_wrapper}>
          <Image
            src={cartItem.product?.images[0]}
            width={100}
            height={100}
            alt={cartItem.product.title}
            className={s.image}
          />
          <div>
            <div className={s.title}>{cartItem.product.title.slice(0, 26)}</div>
            <div className={s.card_model}>
              {cartItem.product.title.slice(28)}
            </div>
          </div>
        </div>

        <div className={s.item_price}>{cartItem.product.price} грн</div>
        <QtyBtn
          className={s.qtyBtn_container}
          qty={cartItem.qty}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
          increaseClassName={s.increase_btn}
          decreaseClassName={`${s.decrease_btn} ${cartItem.qty === 1 ? s.decrease_btn_disabled : ''}`}
          isInCart={true}
        />

        <CrossButton onClick={() => dispatch(remove(cartItem.product))} />
      </div>
    </>
  );
};

export default CartItemCard;