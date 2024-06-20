import React, { useState, useEffect, useRef } from "react";
import Instructions from "./Components/Instructions";
import SearchBox from "./Components/SearchBox";
import stockImage from "./Images/stockImage.png";
import "./index.css";
import AddFavourites from "./Components/AddFavourites";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [stock, setStock] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);
  const [savedData, setSavedData] = useState({});
  const [dataBase, setDataBase] = useState({});

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  // const setSavedData({

  // })
  //get data from the api
  const getData = async () => {
    console.log(searchValue);
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchValue}&interval=5min&apikey=` +
          import.meta.env.VITE_APIKEY
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("fetch error");
      }
      const data = await response.json(); //JSON to javascript
      console.log(data);
      setStock(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   console.log("useEffect ran with getData");
  //   getData();
  // }, [searchValue]);

  useEffect(() => {
    console.log(stock);
  });

  const getData3 = async () => {
    const resp3 = fetch(
      "https://api.airtable.com/v0/app7WhNBUu42gP1lf/Table%201",
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer" + import.meta.env.VITE_AIR_TABLE_KEY,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "records[]=recpIKVnGVKjy3KF2&records[]=recy1jzxYbpNDdDDB",
      }
    );
  };
  //GET DATA from database
  const getDataBase = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app7WhNBUu42gP1lf/Table%201?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer " + import.meta.env.AIR_TABLE_KEY,
        },
      }
    );
    if (!res.ok) {
      throw new Error("fetch error");
    }
    const data = res.json();
    setDataBase(data);
  };
  //change database, change codes

  //how conditionals work
  //de-structuring
  //if they save, put it into the airtable

  const getData2 = async () => {
    const resp = fetch(
      //doesn't 'fetch' but POST data onto airtable
      "https://api.airtable.com/v0/app7WhNBUu42gP1lf/Table%201",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_AIR_TABLE_KEY,
          "Content-Type": "application/json",
        },
        // body: '{\n  "records": [\n    {\n      "fields": {\n        "Name": "Apple",\n        "Email": "apple@apple.com"\n      }\n    },\n    {\n      "fields": {\n        "Name": "banana",\n        "Email": "banana@banana.com"\n      }\n    }\n  ]\n}',
        body: JSON.stringify({
          records: [
            {
              fields: {
                stockName: searchValue, //change to the state in the input
              },
            },
          ],
        }),
      }
    );
  };

  return (
    <div className="main">
      <h2>Stock Price Tracker</h2>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <button onClick={getData}>Discover Stocks</button>
      <button onClick={getData2}>Save Stock</button>
      <button onClick={<AddFavourites />}>View Saved Stocks</button>
      <button>Instructions</button>
      <p>{JSON.stringify(stock)}</p>
      <AddFavourites />
      <img src="https://www.investopedia.com/thmb/ASStR21rMu9-9_nj1x07H83zbUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-stock-market-data-on-digital-display-1058454392-c48e2501742f4c21ad57c25d6a087bd0.jpg"></img>
    </div>
  );
}

export default App;

//put air table data into array and then map the array
//put discover stocks API into airtable, th
