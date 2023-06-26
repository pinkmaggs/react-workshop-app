import React, { useState, useEffect } from "react";
import SelectedProducts from "./SelectedItems/SelectedItems";
import Toolbar from "./Toolbar/Toolbar";
import Calculator from "./calculator";
import SelectedItems from "./SelectedItems/SelectedItems";
import Title from "./title";
import "./Cart.css";

interface Props {
  item: Array<object>;
  remove: (nom: string) => void;
  cancel: () => void;
}

const Cart = ({ item, remove, cancel }: Props) => {
  // Hook for total price
  const [totalPrice, setTotalPrice] = useState(0);

  const [selectedItems, setSelectedItems] = useState(item);

  React.useEffect(() => {
    setSelectedItems(item);
  }, [item]);

  {
    useEffect(() => {
      let total = 0;

      selectedItems.forEach((obj) => {
        // console.log(selectedItems);
        const price = parseFloat(obj["prix"]);
        const eachTotal = obj["amount"] * price;
        total += eachTotal;
      });
      const roundedPrice = Math.round(total * 100) / 100;
      setTotalPrice(roundedPrice);
    }, [selectedItems]);
  }

  const changeQuantity = (prodName: string, newQuantity: number) => {
    setSelectedItems((prevItems) =>
      prevItems.map((thisItem) => {
        if (thisItem["nom"] === prodName) {
          const updatedItem = { ...thisItem, amount: newQuantity };
          // console.log(updatedItem); // Log the updated item for debugging purposes
          return updatedItem;
        } else {
          return thisItem;
        }
      })
    );
  };

  const handlePay = () => {
    let price = totalPrice * 100;
    window.open(
      `https://fintech.softone.gr/ui/stripe.html?acc=95&code=SPXX000250000000000000001&sw=0&am=${price.toString()}`,
      "_blank",
      "width=500,height=500"
    );
  };

  //https://fintech.softone.gr/ui/stripe.html?acc=95&code=SPXX000250000000000000001&sw=0&am=5000
  return (
    <div id="document">
      <div>
        <SelectedItems
          items={selectedItems}
          remove={remove}
          changeQ={changeQuantity}
        />
      </div>
      <Toolbar cancel={cancel} pay={handlePay} total={totalPrice} />
    </div>
  );
};

export default Cart;
