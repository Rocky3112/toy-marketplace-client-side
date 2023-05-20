/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";

const ToyDetails = () => {
  // const details = useLoaderData();
  // console.log(details);
  const [details, setDetails] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/allToy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);
  console.log(details);
  const {pictureUrl,description,name,price,quantity,sellerName,sellerEmail,rating}= details
  return (
    <div>
      <div className="hero my-20 min-h-screen bg-base-300 rounded-2xl shadow-2xl">
        <div className="hero-content items-center text-left gap-5 flex-col lg:flex-row">
          <img
            src={pictureUrl}
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <div className=" flex gap-5 text-lg">
            <p className="py-3">
              Price: {price}
            </p>
            <p className="py-3">
              Rating: {rating}
            </p>
            </div>
            <h2 className=" text-lg pb-3">Seller Name {sellerName}</h2>
            <p>{sellerEmail}</p>
            <p className=" py-3">Available Quantity: {quantity}</p>
            <p>Description: {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
