import React , {useState} from "react";
import SideBar from "./SideBar";
import Products from "./Products";
import SearchIcon from "@material-ui/icons/Search";

const ProductList = () => {
  const [val , setVal] = useState("");
  return (
    <div className="product">
        <input className="product_input" value = {val} onChange={(e)=>setVal(e.target.value)}/>
        <SearchIcon className="product_search_btn" />
      <div className="product_div">
      <SideBar />
      <Products/>
      </div>
    </div>
  );
};

export default ProductList;
