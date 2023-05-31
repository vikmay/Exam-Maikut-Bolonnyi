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
  allowZero?: boolean;
}

const CartItemCard = ({ cartItem, allowZero }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={s.cartItem_container}>
        <div className={s.img_name_wrapper}><Image
          src={cartItem.product?.images[0]}
          width={100}
          height={100}
          alt={cartItem.product.title}
          className={s.image}
        />
        <div>
          <div className={s.title}>{cartItem.product.title.slice(0, 26)}</div>
          <div className={s.card_model}>{cartItem.product.title.slice(28)}</div>
        </div></div>

        <p className={s.item_price}>{cartItem.product.price} $</p>
        <p>&#xd7;</p>
        <QtyBtn
          qty={cartItem.qty}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
          className={s.qtyBtn_container}
          increaseClassName={s.increase_btn}
          decreaseClassName={s.decrease_btn}
          allowZero={allowZero} // Pass allowZero prop to QtyBtn
        />

        <p className="text-center font-bold text-xl">
          {(cartItem.qty * cartItem.product.price).toFixed(2)} $
        </p>
        <CrossButton onClick={() => dispatch(remove(cartItem.product))} />
      </div>
    </>
  );
};

export default CartItemCard;
