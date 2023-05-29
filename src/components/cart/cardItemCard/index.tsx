import { CartItem } from "@/../../interfaces";
import React from "react";
import { decrement, increment, remove } from "@/../../store/features/cartSlice";
import { useAppDispatch } from "@/../../store/store";
import QtyBtn from "../qtyBtn";
import { Product } from "@/../../interfaces";

interface Props {
  cartItem: CartItem;
  product: Product;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-4 py-2 border-b">
      <img 
        src={cartItem.product.image}
        width={100}
        height={50}
        alt={cartItem.product.title}
        className="rounded-md ms-10 my-2"
      />
      <div>
        <p className="text-center text-xl font-extrabold">
          {cartItem.product.title}
        </p>
        
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="font-bold">{cartItem.product.price} $</p>
        <p>&#xd7;</p>
        <QtyBtn
          qty={cartItem.qty}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
        />
      </div>
      <p className="text-center font-bold text-xl">
        {(cartItem.qty * cartItem.product.price).toFixed(2)} $
      </p>
      <button
        onClick={() => dispatch(remove(cartItem.product))}
        className="w-[50%] bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
      >
        Видалити
      </button>
    </div>
  );
};

export default CartItemCard;