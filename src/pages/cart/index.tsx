import CartItemCard from "@/components/cart/cardItemCard";
import React from "react";
import { TotalPriceSelector } from "@/../store/features/cartSlice";
import { useAppSelector } from "@/../store/store";
import Link from "next/link";
import { useAppDispatch } from "@/../store/store";
import { emptyCart } from "@/../../store/features/cartSlice";
import s from "./index.module.scss";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);

  if (cartItems.length === 0) {
    return (
      <>
        <p className={s.title}>Кошик</p>
        <div className={s.container}>
          <span className={s.message}>Ваш кошик порожній :((</span>
          <Link
            className="text-black text-4xl font-bold rounded py-6 px-6 bg-green-300"
            href="/catalog"
          >
            Вперед до покупок
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={s.title}>Кошик</div>
      <div className={s.top_btns_container}>
        <button
          onClick={() => dispatch(emptyCart())}
          className={s.empty_cart_btn}
        >
          Очистити кошик
        </button>
        <Link className={s.payment_link} href="/payment">
          Оформити покупку
        </Link>
      </div>
      <div className="p-2 mb-2 relative">
        {cartItems.map((item) => (
          <CartItemCard cartItem={item} />
        ))}

        <div className="flex">
          <p className={s.total_price}>
            Загальна Ціна :{" "}
            <span>{totalPrice} $</span>
            <Link
              className="text-black text-3xl font-bold rounded my-4 py-2 px-2 bg-orange-400"
              href="/catalog"
            >
              Назад до покупок
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartPage;
