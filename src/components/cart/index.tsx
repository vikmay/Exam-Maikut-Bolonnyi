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
  newImage?: any;
  imageSize?: { width: number, height: number };
  totalItemsStyle?: React.CSSProperties;
}

const Cart = ({ className = '', newImage, imageSize = { width: 29, height: 24 }, totalItemsStyle }: Props) => {
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
            <div key={totalItems} className={s.total_items} style={totalItemsStyle}>
              {totalItems}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Cart;
