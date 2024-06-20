import React, { useState, useEffect } from "react";
//gets data from airtable

const AddFavourites = () => {
  const [dataBase, setDataBase] = useState([]);
  //get searchValue Data from Airtable
  const getDataBase2 = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app7WhNBUu42gP1lf/Table%201?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer" + import.meta.env.AIR_TABLE_KEY,
        },
      }
    );
    if (!res.ok) {
      throw new Error("fetch error");
    }
    const data = res.json();
    console.log(data);
    setDataBase(data);
  };

  useEffect(() => {
    getDataBase2();
  }, []);

  const dataBaseString = JSON.stringify(dataBase);
  return (
    <div>
      <p>{JSON.stringify(dataBase)}</p>
    </div>
  );
};
export default AddFavourites;
//fetch data, then put data into state, convert from JSON into string to make sure you are printing it
//make buttons and onClick, retrieve the data through a state / curly braces
