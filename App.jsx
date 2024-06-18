import React, { useState } from "react";

const instructions = "hello";

function App() {
  const [stocks, setStocks] = useState([
    {
      "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2024-06-13",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern",
      },
      "Time Series (Daily)": {
        "2024-06-13": {
          "1. open": "169.0100",
          "2. high": "169.5900",
          "3. low": "168.3350",
          "4. close": "169.1200",
          "5. volume": "3525717",
        },
        "2024-06-12": {
          "1. open": "171.3500",
          "2. high": "172.4700",
          "3. low": "168.1010",
          "4. close": "169.0000",
          "5. volume": "3522698",
        },
        "2024-06-11": {
          "1. open": "169.9800",
          "2. high": "170.0000",
          "3. low": "166.8100",
          "4. close": "169.3200",
          "5. volume": "2951251",
        },
      },
    },
  ]);

  return (
    <div>
      <h2>Stock Price Tracker</h2>
      <button className="Discover Stocks">Discover Stocks</button>
      <button>Save Stocks</button>
      <button>Instructions</button>
    </div>
  );
}

export default App;
