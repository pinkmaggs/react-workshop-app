import React, { useState } from "react";
import Item from "./Item";
import SearchBar from "./searchBar";
import "./Browser.css";

interface Props {
  items: Array<Object>;
  select: (nom: string, prix: string, amount: number) => void;
}

const Browser = ({ items, select }: Props) => {
  const [searchedItems, setSearchedItems] = useState<Array<Object>>(items);

  const handleSearch = (searchInput: string) => {
    const filteredItems = items.filter((value) => {
      const name = value["NAME"]?.toUpperCase();
      const price = value["PRICER"]?.toString();

      return (
        name?.includes(searchInput.toUpperCase()) ||
        price?.includes(searchInput.toUpperCase())
      );
    });

    setSearchedItems(filteredItems);
  };
  React.useEffect(() => {
    setSearchedItems(items);
  }, [items]);
  return (
    <div id="browser">
      <div id="searchBarDiv">
        <SearchBar onSubmit={handleSearch} />
      </div>

      <div id="availableItems">
        {searchedItems.map((obj) => {
          const price = parseFloat(obj["PRICER"]);
          const roundedPrice = Math.round(price * 100) / 100;
          const formattedPrice = roundedPrice.toFixed(2);
          return (
            <Item
              className="card item mt-10"
              key={obj["CODE"]}
              name={obj["NAME"]}
              pic={
                "https://demo.oncloud.gr/s1services?filename=" +
                obj["MTRL_ITEDOCDATA_SODATA"]
              }
              price={formattedPrice}
              select={() => select(obj["NAME"], formattedPrice, 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Browser;
