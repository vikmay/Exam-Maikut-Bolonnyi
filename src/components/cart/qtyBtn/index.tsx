import React from "react";
// import { Button } from "./elements";
import { TrashIcon } from "@heroicons/react/24/solid";
import s from "./index.module.scss";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <>
      <div className={s.btn_container}>
        <button
          className={s.btn_decrease}
          onClick={props.onDecrease}
        >
          {props.qty === 1 ? <TrashIcon className="w-5 mx-auto" /> : "-"}
        </button>
        <div className={s.quantity}>{props.qty}</div>
        <button
          className={s.btn_increase}
          onClick={props.onIncrease}
        >
          +
        </button>
      </div>
    </>
  );
};

export default QtyBtn;