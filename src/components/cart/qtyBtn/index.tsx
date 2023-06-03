import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import s from "./index.module.scss";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
  className?: string;
  increaseClassName?: string;
  decreaseClassName?: string;
  isInCart?: boolean;
}

const QtyBtn = ({
  onIncrease,
  onDecrease,
  qty,
  className,
  increaseClassName,
  decreaseClassName,
  isInCart,
}: Props) => {
  const isQtyOne = qty === 1;

  const decreaseButtonClassName = `${s.btn_decrease} ${decreaseClassName} ${isQtyOne && isInCart ? s.disabled : ''}`;

  return (
    <div className={`${s.btn_container} ${className}`}>
      <button
        className={decreaseButtonClassName}
        onClick={onDecrease}
        disabled={isQtyOne && isInCart}
      >
        {isQtyOne && !isInCart ? <TrashIcon className="align-self-center pt-2" /> : "-"}
      </button>
      <div className={s.quantity}>{qty}</div>
      <button
        className={`${s.btn_increase} ${increaseClassName}`}
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QtyBtn;
