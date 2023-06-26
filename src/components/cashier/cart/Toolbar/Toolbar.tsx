import React from "react";
import Button from "./Button";
import Calculator from "../calculator";
import "./Toolbar.css";

interface Prop {
  cancel: () => void;
  pay: () => void;
  total: number;
}
const toolbar = ({ cancel, pay, total }: Prop) => {
  return (
    <div id="toolbar">
      <Calculator total={total} />

      <div id="cartActions">
        <button
          type="button"
          className="btn btn-outline-dark myButton "
          onClick={cancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-outline-dark myButton"
          onClick={pay}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default toolbar;
