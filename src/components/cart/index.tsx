"use client";

import  CartIcon  from "./cartIcon";
import React from "react";
import { totalCartItemsSelector } from "../../../store/features/cartSlice";
import { useAppSelector } from "../../../store/store";

interface Props {
  className?: string;
}
const Cart = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <>
      <div className={`${props.className} relative`}>
        <CartIcon />
        {!!totalItems && (
          <div
            key={totalItems}
            className="bg-red-500  flex justify-center items-center
        rounded-full w-6 h-6 absolute -top-2 -right-4 text-white animate-pingOnce
        "
          >
            {totalItems}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;