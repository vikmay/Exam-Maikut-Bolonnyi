import { Product } from "@/../../interfaces";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/../../store/store";
import s from "./index.module.scss";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/../store/features/cartSlice";
import QtyBtn from "../qtyBtn";
import Image from "next/image";
import addtocard from "@/../../public/images/AddToCartBtn.png";

interface Props {
  product: Product;
  id: number;
  simple?: boolean;
  className?: string;
  btnText?: string;
  increaseClassName?: string;
  decreaseClassName?: string;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div>
        <button
          className={
            props.simple
              ? `${props.className} ${s.btncolor_simple}`
              : `${props.className} ${s.btncolor}`
          }
          onClick={() => dispatch(increment(props.product))}
        >
          {props.simple ? (
            props.btnText || ""
          ) : (
            <Image src={addtocard} alt="cart_image" width={60} height={60} />
          )}
        </button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
      className={props.className}
      increaseClassName={props.increaseClassName}
      decreaseClassName={props.decreaseClassName}
    />
  );
};

export default AddToCartBtn;
