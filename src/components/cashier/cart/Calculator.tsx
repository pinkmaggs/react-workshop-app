import React from "react";
import "./Calculator.css";

interface Props {
  total: number;
}

const Calculator = ({ total }: Props) => {
  let num = (Math.round(total * 100) / 100).toFixed(2);
  return (
    <div id="calculator">
      <input readOnly type="text" name="sum" id="sum" value={num}></input>
    </div>
  );
};

export default Calculator;
