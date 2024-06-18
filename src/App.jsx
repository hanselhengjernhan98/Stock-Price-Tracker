import React, { useState, useEffect } from "react";
import Instructions from "./Components/Instructions";

function App() {
  // const [stock, setStock] = useState([]);
  // const userNameInput = useRef();
  // const getData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
  //     );

  //     if (!response.ok) {
  //       throw new Error("fetch error");
  //     }
  //     const data = await response.stringify.json();
  //     setStock(data.close);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <h2>Stock Price Tracker</h2>
      <button>Discover Stocks</button>
      <button>Save Stocks</button>
      <button onClick={Instructions}>Instructions</button>
      <p>
        <Instructions />
      </p>
    </div>
  );
}

export default App;
