import React from "react";
import { useParams, Link } from "react-router-dom";
import MyData from "../Model/Data";

const Detail = () => {
  const { id } = useParams();
  const thisProduct = MyData.find((prod => prod.id === id);
  console.log(id);
  return (
    <div>
      <h1>This is Detail Page {id}</h1>
      <h1>This is {thisProduct.name}</h1>
      <Link to="/">back</Link>
    </div>
  );
};
export default Detail;
