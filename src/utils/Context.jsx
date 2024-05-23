import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "../utils/axios";

export const ProductContext = createContext();
const Context = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <ProductContext.Provider value={[products, setProducts]}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default Context;
