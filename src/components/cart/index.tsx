"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { totalCartItemsSelector } from "@cartSlice/../../store/features/cartSlice";
import { useAppSelector } from "@store/../../store/store";
import Image from "next/image";
import s from "./index.module.scss";

// Img //
import CartImg from "@/../public/images/CartImg.svg";
import Link from "next/link";

interface Props {
  className?: string;
}
const Cart = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <>
      <Link href="/cart">
        <div className={s.cart_container}>
          <Image
            className={s.cart_icon}
            src={CartImg}
            width={29}
            height={24}
            alt="Cart"
          ></Image>
          {!!totalItems && (
            <div key={totalItems} className={s.total_items}>
              {totalItems}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Cart;
