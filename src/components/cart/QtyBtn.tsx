import React from "react";
// import { Button } from "./elements";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <button
          className="w-14 h-14 bg-red-500 rounded"
          onClick={props.onDecrease}
        >
          {props.qty === 1 ? <TrashIcon className="w-5 mx-auto" /> : "-"}
        </button>
        <p className="font-bold">{props.qty}</p>
        <button
          className="w-14 h-14 bg-green-500 rounded"
          onClick={props.onIncrease}
        >
          +
        </button>
      </div>
    </>
  );
};

export default QtyBtn;