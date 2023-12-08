import React, { useState } from "react";
import { useNavigate } from "react-router";
import SuggestionBox from "./SuggestionBox";
import { bG1 } from "Images";
import SearchIcon from "@material-ui/icons/Search";
const Dashboard = () => {
    const navigate=useNavigate();
    const [flag,setFlag]=useState(false);
    const [filterValue, setFilterValue] = useState('');
    const showSuggestion=()=>{
       setFlag(true);
    }
    const navigateProductList=()=>{
      if(filterValue.length > 0)
       navigate('/productlist');
    }
    const handleInputChange = (e) => {
        setFilterValue(e.target.value);
      };
  return (
    <>
      <div className="dashboard">
        <img src={bG1} alt="bg-img" className="image" />
        <div className="dashboard_div">
        <input className="dashboard_input" value={filterValue} onClick={showSuggestion} onChange={handleInputChange}/>
        <SearchIcon onClick={navigateProductList} className="dashboard_search_btn"/>
        {flag?<SuggestionBox filterValue={filterValue}/>:null}
        </div>

      </div>

    </>
  );
};

export default Dashboard;
