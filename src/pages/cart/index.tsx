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
          <span className={s.message}>
            Ваш кошик порожній :((
          </span>
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
      <p className="text-4xl font-bold text-center my-3">Кошик</p>
      <div className="p-2 mb-2 relative">
        {cartItems.map((item) => (
          <CartItemCard cartItem={item} />
        ))}

        <div className="flex">
          <p className="text-red-600 font-extrabold text-3xl my-4 ms-auto">
            Загальна Сума:{" "}
            <span className="text-slate-900 font-bold">{totalPrice} $</span>
            <Link
              className="text-black rounded m-24 mt-12 py-2 px-3 bg-green-400"
              href="/payment"
            >
              Перейти до оплати
            </Link>
            <Link
              className="text-black text-3xl font-bold rounded my-4 py-2 px-2 bg-orange-400"
              href="/catalog"
            >
              Назад до покупок
            </Link>
          </p>
        </div>
        <button
          onClick={() => dispatch(emptyCart())}
          className="flex bg-black hover:bg-red-700 text-white 
          font-bold py-2 px-4 rounded fixed top-20 right-3"
        >
          Очистити кошик
        </button>
      </div>
      
    </>
  );
};

export default CartPage;
