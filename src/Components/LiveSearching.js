import React, { useState, useEffect } from "react";
import countryData from "../Country Data/countryName";

const LiveSearching = () => {

    //Function to filter out the country name data
    function filter(data) {
        return countryData.filter((val)=> (data.trim().toLowerCase() === val.trim().toLowerCase().substring(0,data.length)) && val)
    } 
  
    //useState for storing input data
    const [data,setInput] = useState("");
    
    //useState for storing filterd data
    const [filterData, setFilter] = useState(countryData);
    // useEffect to fetch the data
    useEffect(()=>{
      setFilter(filter(data));
    },[data]);
    
  return (
    <div className="LiveSearching">
      <input type="text" placeholder="Search for a country name"onInput={(e)=>(setInput(e.target.value))} ></input>
      {
        filterData.map((val) => (<p>{val}</p>))
      }
    </div>
  );
};

export default LiveSearching;
