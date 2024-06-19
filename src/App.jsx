import React, { useState, useEffect, useRef } from "react";
import Instructions from "./Components/Instructions";
import SearchBox from "./Components/SearchBox";
import stockImage from "./Images/stockImage.png";
import "./index.css"; // Import the CSS file

function App() {
  const [stock, setStock] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${searchValue}&interval=5min&apikey=" +
          import.meta.env.VITE_APIKEY
      );

      if (!response.ok) {
        throw new Error("fetch error");
      }
      const data = await response.json(); //JSON to javascript
      setStock(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [searchValue]);

  const getData2 = async () => {
    const resp = fetch(
      "https://api.airtable.com/v0/app7WhNBUu42gP1lf/Table%201",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_APIKEY,
          "Content-Type": "application/json",
        },
        // body: '{\n  "records": [\n    {\n      "fields": {\n        "Name": "Apple",\n        "Email": "apple@apple.com"\n      }\n    },\n    {\n      "fields": {\n        "Name": "banana",\n        "Email": "banana@banana.com"\n      }\n    }\n  ]\n}',
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: "Apple",
                Email: "apple@apple.com",
              },
            },
            {
              fields: {
                Name: "banana",
                Email: "banana@banana.com",
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
      <button>Discover Stocks</button>
      <button>Save Stocks</button>
      <button>Instructions</button>
      <p>{JSON.stringify(stock)}</p>
      <img src="https://www.investopedia.com/thmb/ASStR21rMu9-9_nj1x07H83zbUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-stock-market-data-on-digital-display-1058454392-c48e2501742f4c21ad57c25d6a087bd0.jpg"></img>
    </div>
  );
}

export default App;
