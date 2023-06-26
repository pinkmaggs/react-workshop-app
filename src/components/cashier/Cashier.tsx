import React, { useEffect, useState } from "react";
import Cart from "./cart/cart";
import Browser from "./browser/Βrowser";
import "./Cashier.css";

//cashier is divided into two parts: cart and browser
//we request data from api and pass it down to other components as prop
const Cashier = () => {
  //Hook for data set
  const [dataSet, setDataSet] = useState([]);

  //fetching data from the api
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: "POST",
        headers: {
          s1code: "demo",
          "Content-Type": "application/json; charset=windows-1253",
        },
        body: JSON.stringify({
          appId: "156",
          filters: "MTRCATEGORY=101",
          clientID:
            "9J8pH6DmSKXX9JOmHrTOUK9DUIKrGt989JT6GMLHKs5tI6f8KYKrGaHeSKGbDKLPGaqbDKDm9JOmNoKrHNb5KNHbGqX7T49BQqH2LNPqPKTLM452Sqn3LLH5LbH49JL4H5L1RMLOHKHcLrTfTKrDQ2KsC5ybDq90OqfsK7LN9JL3HM58OIKsC7KbDKCbDKDLPLLbGNLJP41JI6j4G4DYKLL99JT2I2KsC4zaR71D9JL5UKLLMNb5Lq1COqnhG719ML55M55HT5DeT6DAHdHdHL9PTLCbDKHiSaXCQ69N9JL59JT4HKybDqH8GaHe9JL3GrPoKKLFM4LMLK91",
          SERVICE: "GetList",
          FIELDS:
            "ITEM.MTRL_ITEDOCDATA_SODATA,MTRL_MTRSUBSTITUTE_CODE,ITEM.MTRL,ITEM.CODE,ITEM.CODE1,ITEM.CRDCARDMODE,ITEM.EXPN1,ITEM.EXPN2,ITEM.EXPN3,ITEM.EXPVAL1,ITEM.EXPVAL2,ITEM.EXPVAL3,ITEM.ISACTIVE,ITEM.MTRCATEGORY,ITEM.MTRGROUP,ITEM.MTRL,ITEM.MTRTYPE,ITEM.MTRUNIT1,ITEM.NAME,ITEM.PRICER,ITEM.PRICEW,ITEM.REMARKS,ITEM.SODISCOUNT,ITEM.VAT,ITEM.UPDDATE,ITEM.CRDCARDMODE,ITEM.CODE2,ITEM.APVCODE",
          OBJECT: "ITEM",
        }),
      };

      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://soft1.s1cloud.net/s1services?enc=utf8",
          config
        );

        const jsonData = await response.json();
        setDataSet(jsonData.data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };
    fetchData();
  }, []);

  //array to store all items clicked on

  //data transfer when object is clicked on browser
  const [clickedData, setClickedData] = useState<
    { nom: string; prix: string; amount: number }[]
  >([]);

  const handleDataTransfer = (nom: string, prix: string, amount: number) => {
    // Check if the item already exists in clickedData
    const isItemExists = clickedData.some((item) => item.nom === nom);

    // If the item already exists, return without adding it again
    if (isItemExists) {
      return;
    }
    const newClickedData = { nom, prix, amount };
    setClickedData((prevClickedData) => [...prevClickedData, newClickedData]);
  };

  const handleRemove = (nom: string) => {
    setClickedData((prevClickedData) =>
      prevClickedData.filter((item) => item["nom"] !== nom)
    );
  };

  //on cancel button click, erase all products and make calculator 0;
  const handleCancel = () => {
    setClickedData([]);
  };

  return (
    <div id="cashier">
      <Cart item={clickedData} remove={handleRemove} cancel={handleCancel} />
      <Browser items={dataSet} select={handleDataTransfer} />
    </div>
  );
};

export default Cashier;
