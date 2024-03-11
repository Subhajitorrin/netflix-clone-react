import React, { useEffect } from "react";
import Card from "./Card";

function Row({title,arr}) {
    console.log(arr);
  return (
    <div className="rowcontainer">
      <h2>{title}</h2>
      <div className="cardscontainer">
        {
            arr.map((item,index)=>{
                return <Card key={index} imglink={item.poster_path}/>
            })
        }
      </div>
    </div>
  );
}

export default Row;
