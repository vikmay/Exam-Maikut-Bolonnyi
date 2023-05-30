import React from "react";
// import { Button } from "./elements";
import { TrashIcon } from "@heroicons/react/24/solid";
import s from "./index.module.scss";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
  className?: string;
  increaseClassName?: string;
  decreaseClassName?: string;
}

const QtyBtn = ({ onIncrease, onDecrease, qty, className, increaseClassName, decreaseClassName }: Props) => {
  return (
    <div className={`${s.btn_container} ${className}`}>
      <button
        className={`${s.btn_decrease} ${decreaseClassName}`}
        onClick={onDecrease}
      >
        {qty === 1 ? <TrashIcon className="align-self-center pt-2" /> : "-"}
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