import React, { useEffect, useState } from "react";
import Cart from "./cart/Cart";
import Browser from "./browser/Βrowser";
import "./Cashier.css";

//cashier is divided into two parts: cart and browser
//we request data from api and pass it down to other components as prop

const Cashier = () => {
  //Hook for data set
  const [dataSet, setDataSet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [client, setClient] = useState(
    sessionStorage.getItem("clientID") ? sessionStorage.getItem("clientID") : ""
  );

  //fetching data from the api
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: "GET",
        headers: {
          limit: "1000",
          s1code: "demo",
          accept: "application/jason ",
          Auhorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uS2V5IjoiMzgyNTIxYjktMGVhNi00OWI4LWEwOWItYmYzZjYwYWJmZjRkIiwic24iOiIwMTEwMjQyMDUwMDMxNiIsIlNvZnQxQXV0aG9yaXplZCI6IlRydWUiLCJpc3MiOiJiZmZfaXNzdWVyX3NvZnQxXyFAIyIsImF1ZCI6InMxX2FwaV9wcm90ZWN0ZWRfcmVzb3VyY2VzIn0.mugt53V4l7AGigdnhPavVGzVgFBcVAuGiT1qGI7shi4Jl4wF0U6vXkOWTN-Hp1ycv-5mW3zEJHFrlPBmCMQKhA",
          ApiToken: "4966b83f-90b4-417c-9678-7ea5692f338a",
          "Content-Type": "application/json; charset=windows-1253",
        },
      };

      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://apigateway-app.proudcliff-16a4efb5.northeurope.azurecontainerapps.io/api/v1/Item/List?limit=1000",
          config
        );
        const jsonData = await response.json();
        setDataSet(jsonData.data);
        setIsLoading(false);
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
      <Browser
        items={dataSet}
        select={handleDataTransfer}
        loadState={isLoading}
      />
    </div>
  );
};

export default Cashier;
