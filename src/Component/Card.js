import React, { useState } from "react";
import Data from "../Model/Data";
import { Link, useParams } from "react-router-dom";

const Card = () => {
  const [food, setFood] = useState(Data);

  let params = useParams();
  console.log(params);

  const FilterItem = (categItem) => {
    const updatedItems = Data.filter((curElem) => {
      return curElem.category === categItem;
    });

    setFood(updatedItems);
  };

  return (
    <div className="container">
      <h1 className="main-heading">Find Your Best Food</h1>
      <div className="btn-flex">
        <button className="btn" onClick={() => FilterItem("breakfast")}>
          Breakfast
        </button>
        <button className="btn" onClick={() => FilterItem("lunch")}>
          Lunch
        </button>
        <button className="btn" onClick={() => FilterItem("evening")}>
          Evening
        </button>
        <button className="btn" onClick={() => FilterItem("dinner")}>
          Dinner
        </button>
        <button className="btn" onClick={() => setFood(Data)}>
          All
        </button>
      </div>
      <div className="card-grid">
        {food.map((curel) => {
          return (
            <div key={curel.id}>
              <div className="card">
                <img src={curel.image} alt="image not found" />
                <h1>{curel.name}</h1>
                <h3>{curel.id}</h3>
                <Link to={`/detail/${curel.id}`}>More Detail</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
