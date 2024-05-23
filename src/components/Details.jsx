import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "../utils/axios";
const Details = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="flex justify-center items-center ">
      <div className="image flex items-center justify-center w-[30%] h-full ">
        <img className="w-[60%] object-contain" src={product.image} alt="" />
      </div>
      <div className="content w-[40%] f-full ">
        <h1 className="text-3xl font-semibold ">{product.title}</h1>
        <h2 className="mt-2 opacity-60 font-semibold text-lg">
          {product.category}
        </h2>
        <h3 className="text-red-300 font-semibold">${product.price}</h3>
        <h4 className="mt-2">{product.description}</h4>
        <Link
          to={"/edit"}
          className="px-4 mt-4 rounded-md py-2 text-green-400 border-2 border-green-300"
        >
          Edit
        </Link>
        <button className="px-4 ml-4 rounded-md py-2 text-red-400 border-2 border-red-300">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Details;
