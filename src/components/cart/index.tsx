import Image from "next/image";
import React from "react";
// Img //
import CartImg from "../../../public/images/CartImg.svg";
import Link from "next/link";
const Cart = () => {
  return (
    <>
      <Link href="/cart">
        <Image src={CartImg} width={29} height={24} alt="Cart"></Image>
      </Link>
    </>
  );
};

export default Cart;
