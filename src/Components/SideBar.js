import React from "react";
import SideBarRow from "./SideBarRow";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar_h1">Search Results</h1>
      <h3 className="sidebar_headings">BRAND</h3>
      <SideBarRow selected Icon={CheckBoxOutlineBlankIcon} title="Mango" />
      <SideBarRow Icon={CheckBoxOutlineBlankIcon} title="H&M" />
      <hr />
      <h3 className="sidebar_headings">PRICE RANGE</h3>
      <SideBarRow Icon={CheckBoxOutlineBlankIcon} title="Under 500" />
      <SideBarRow Icon={CheckBoxOutlineBlankIcon} title="1000 to 3000" />
      <hr />
      <h3 className="sidebar_headings">RATINGS</h3>
      <SideBarRow selected Icon={CheckBoxOutlineBlankIcon} title={5} />
      <SideBarRow Icon={CheckBoxOutlineBlankIcon} title={4} />
      <SideBarRow Icon={CheckBoxOutlineBlankIcon} title={3} />
    </div>
  );
};

export default SideBar;
