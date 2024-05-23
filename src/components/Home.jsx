import axios from "../utils/axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Nav from "./Nav";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!category || category == "undefined") {
      setFilteredProducts(products);
    } else {
      getProductsCategory();
    }
  }, [category, products]);
  return (
    <>
      <Nav />
      <div className="flex ml-2 mt-12 flex-wrap gap-3">
        {filteredProducts &&
          filteredProducts.map((product, id) => (
            <Link key={id} to={`/details/${product.id}`}>
              <div
                key={id}
                className="w-[15vw]    shadow-md rounded-md h-[40vh] max-h-[40vh] pt-5 "
              >
                <div className="w-full h-[80%] flex justify-center py-3  overflow-hidden">
                  <img
                    className="w-[60%]  object-contain hover:scale-110"
                    src={product.image}
                    alt=""
                  />
                </div>
                <h1 className="text-center text-xs p-2  font-semibold">
                  {product.title}
                </h1>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
