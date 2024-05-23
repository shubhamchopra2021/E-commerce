import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
const Nav = () => {
  const [products] = useContext(ProductContext);

  const unique_category = [
    ...products.reduce((acc, cv) => acc.add(cv.category), new Set()),
  ];

  return (
    <>
      <div className="bg-zinc-200 h-screen flex justify-center p-3">
        <div>
          <Link
            to={"/rough"}
            className="text-blue-400 border-2 border-blue-300 px-3 py-1 rounded-md"
          >
            Rough
          </Link>
          <h1 className="text-2xl mt-8">Categories</h1>

          <div className=" p-2 flex flex-col  ">
            {unique_category.map((c, id) => (
              <Link
                key={id}
                to={`/?category=${c}`}
                className="ml-2 flex  items-center mb-3"
              >
                <span className="block h-3 w-3 bg-green-300 rounded-full"></span>
                {c}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
