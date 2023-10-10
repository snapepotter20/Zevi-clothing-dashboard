import React from "react";
import SideBar from "./SideBar";
import Products from "./Products";
import SearchIcon from "@material-ui/icons/Search";

const ProductList = () => {
  return (
    <div className="product">
        <input className="product_input" />
        <SearchIcon className="product_search_btn" />
      <div className="product_div">
      <SideBar />
      <Products/>
      </div>
    </div>
  );
};

export default ProductList;
