import { useForm } from "react-hook-form";
import CartItemCard from "@/components/cart/cardItemCard";
import React from "react";
import {
  TotalPriceSelector,
  totalCartItemsSelector,
} from "@/../store/features/cartSlice";
import { useAppSelector } from "@/../store/store";
import Link from "next/link";
import { useAppDispatch } from "@/../store/store";
import { emptyCart } from "@/../../store/features/cartSlice";
import s from "./index.module.scss";
import CustomAccordion from "@/components/accordion";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);
  const totalItems = useAppSelector(totalCartItemsSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const getQuantityLabel = (num: number) => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastDigit === 1 && !(lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
      return "товар";
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      !(lastTwoDigits >= 10 && lastTwoDigits <= 20)
    ) {
      return "товари";
    } else {
      return "товарів";
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <p className={s.title}>Кошик</p>
        <div className={s.empty_cart_wrapper}>
          <div className={s.empty_cart_container}>
            <span className={s.empty_cart_msg}>Ваш кошик порожній</span>
            <Link className={s.contiue_shopping_btn} href="/catalog">
              До покупок
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={s.cart_container}>
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
        <div className={s.items_wrapper}>
          <div className={s.items_container}>
            {cartItems.map((item) => (
              <CartItemCard cartItem={item} />
            ))}
          </div>
        </div>

        <div className={s.bottom_wrapper}>
          <div className={s.bottom_container}>
            <div className={s.total_price}>
              <span>
                {" "}
                Загальна Ціна
                {totalItems > 1 && (
                  <span>
                    {" "}
                    ({totalItems} {getQuantityLabel(totalItems)}){" "}
                  </span>
                )}{" "}
              </span>
              <span className={s.total_num}>{totalPrice}грн</span>
            </div>

            <div className={s.accord_container}>
              <CustomAccordion
                title="Доставка"
                headerClassName={s.customHeader}
                bodyClassName={s.customBody}
              >
                Доставка
              </CustomAccordion>
              <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <input className={s.input}
                  {...register("name", { required: true })}
                  placeholder="Iм'я*"
                />
                {errors.name && <p>This field is required</p>}

                <input className={s.input}
                  {...register("phone", { required: true })}
                  placeholder="Номер*"
                />
                <input className={s.input}
                  {...register("email", { required: true })}
                  placeholder="Пошта*"
                />
                {errors.email && <p>This field is required</p>}

                {errors.phone && <p>This field is required</p>}
              </form>
            </div>

            <div className={s.bottom_btn_container}>
              <Link className={s.payment_link_down} href="/payment">
                Оформити покупку
              </Link>
              <Link className={s.contiue_shopping_btn} href="/catalog">
                Продовжити покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
