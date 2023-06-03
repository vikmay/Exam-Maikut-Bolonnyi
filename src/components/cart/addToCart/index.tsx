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
  simple?: boolean; // New prop for toggling the styles and behavior
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
          className={props.simple ? s.btncolor_simple : s.btncolor} // Use the prop to toggle styles
          onClick={() => dispatch(increment(props.product))}
        >
          {!props.simple && // Use the prop to toggle content
            <Image src={addtocard} alt="cart_image" width={60} height={60} />}
        </button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;