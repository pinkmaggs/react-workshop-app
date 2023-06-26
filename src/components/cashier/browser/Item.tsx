import React, { ReactNode, useState } from "react";
import "./Item.css";

interface Props {
  name: string;
  price: string;
  className: string;
  imageClass?: string;
  pic: string;
  // handleAmount: (a: number) => void;
  select: (arg1: string, arg2: string, arg3: number) => void;
}
const Item = ({ name, price, className, select, imageClass, pic }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    select(name, price, quantity);
  };

  //01100313514211/32668F0618E836EE.jpg

  //https://demo.oncloud.gr/s1services?filename=01100313514211/C9C6CEA66756A896.jpg

  //replace url with url given --> tackle the problem with the cross origin thing

  const picurl = {
    backgroundImage: "url('" + pic + "')",
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
      </div>
      <div className="card-image" style={picurl}></div>
    </div>
  );
};

export default Item;
