import React from "react";
import { totalCartItemsSelector } from "@/store/features/cartSlice";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import s from "./index.module.scss";

// Img //
import CartImg from "@/../public/images/CartImg.svg";
import Link from "next/link";

interface Props {
  className?: string;
  newImage?: any;
  imageSize?: { width: number, height: number };
  imported?:boolean;
}

const Cart = ({ className = '', newImage, imageSize = { width: 34, height: 34 },imported}: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <>
      <Link href="/cart">
        <div className={`${s.cart_container} ${className}`}>
          <Image
            className={s.cart_icon}
            src={newImage || CartImg}
            width={imageSize.width}
            height={imageSize.height}
            alt="Cart"
          ></Image>
          {!!totalItems && (
            <div 
            key={totalItems}
            className= {imported ? s.total_items_inverted : s.total_items }>
              {totalItems}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Cart;
