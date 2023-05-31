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
  allowZero?: boolean;
}

const QtyBtn = ({
  onIncrease,
  onDecrease,
  qty,
  className,
  increaseClassName,
  decreaseClassName,
  allowZero,
}: Props) => {
  return (
    <div className={`${s.btn_container} ${className}`}>
      {allowZero ? (
        <button
          className={`${s.btn_decrease} ${decreaseClassName}`}
          onClick={onDecrease}
          disabled={qty === 1} // Button will be disabled when qty is 1
        >
          -
        </button>
      ) : (
        <button
          className={`${s.btn_decrease} ${decreaseClassName}`}
          onClick={onDecrease}
        >
          {qty === 1 ? (
            <TrashIcon className="align-self-center pt-2" />
          ) : (
            "-"
          )}
        </button>
      )}
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
