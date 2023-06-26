import React, { useState } from "react";

interface Props {
  name: string;
  price: string;
  className: string;
  // handleAmount: (a: number) => void;
  select: (arg1: string, arg2: string, arg3: number) => void;
  changeQ: (prodName: string, prodQ: number) => void;
  remove: (name: string) => void;
}

const cartItem = ({ name, price, className, select, changeQ, remove }) => {
  const [quantity, setQuantity] = useState(1);

  const addOne = () => {
    setQuantity(quantity + 1);
    changeQ(name, quantity + 1);
  };

  const removeOne = () => {
    setQuantity(quantity - 1);
    changeQ(name, quantity - 1);
    if (quantity === 1) {
      remove(name); // Call the remove function to remove the item
    }
    //if it goes bellow 1 remove item
  };

  return (
    <div className="selectedItem">
      <div className="productName">{name}</div>
      <div className="amount">
        <div
          className="minusBtn quantityBtn"
          onClick={removeOne}
          // onClick={handleRemove}
        >
          -
        </div>
        <div className="quantity">{quantity}</div>
        <div
          className="addBtn quantityBtn"
          onClick={addOne}
          // onClick={handleAdd}
        >
          +
        </div>
      </div>
      <div className="productPrice">{price}</div>
    </div>
  );
};

export default cartItem;
