import React from "react";
import Item from "../../browser/Item";
import CartItem from "./cartItem";
import "./SelectedItems.css";

interface Props {
  items: Array<object>;
  remove: (nom: string) => void;
  changeQ: (prodName: string, prodQ: number) => void;
}

const SelectedItems = ({ items, remove, changeQ }: Props) => {
  return (
    <div id="lines">
      {items.map((obj) => {
        const price = parseFloat(obj["prix"]); // Convert string to number using parseFloat()
        const roundedPrice = Math.round(price * 100) / 100; // Round the price to two decimal places
        const formattedPrice = roundedPrice.toFixed(2); // Convert to two decimal places

        return (
          <CartItem
            className="selectedItem"
            key={obj["nom"]}
            name={obj["nom"]}
            price={formattedPrice}
            select={remove}
            changeQ={changeQ}
            remove={remove}
          />
        );
      })}
    </div>
  );
};

export default SelectedItems;
