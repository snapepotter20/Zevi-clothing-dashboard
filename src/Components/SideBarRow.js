import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import Rating from "@material-ui/lab/Rating";

const SideBarRow = ({ Icon, title }) => {
  let ratingComponent = null;

  if (title === "*****") {
    ratingComponent = (
      <Rating
        size="small"
        icon={<StarRateIcon />}
        value={5}
        precision={0.5}
        style={{ marginLeft: "2px" }}
        readOnly
      />
    );
  } else if (title === "****") {
    ratingComponent = (
      <Rating
        size="small"
        icon={<StarRateIcon />}
        value={4}
        precision={0.5}
        style={{ marginLeft: "2px" }}
        readOnly
      />
    );
  } else if (title === "***") {
    ratingComponent = (
      <Rating
        size="small"
        icon={<StarRateIcon />}
        value={3}
        precision={0.5}
        style={{ marginLeft: "2px" }}
        readOnly
      />
    );
  }

  return (
    <div className={"sidebarRow"}>
      {/* <Icon className="sidebarRow__icon" />
      {title === "*****"
        ? (title = (
            <Rating
              size="small"
              icon={<StarRateIcon></StarRateIcon>}
              value={5}
              precision={0.5}
              style={{ marginLeft: "2px" }}
              readOnly
            />
          ))
        : title === "****"
        ? (title = (
            <Rating
              size="small"
              icon={<StarRateIcon></StarRateIcon>}
              value={4}
              precision={0.5}
              style={{ marginLeft: "2px" }}
              readOnly
            />
          ))
        : title === "***"
        ? (title = (
            <Rating
              size="small"
              icon={<StarRateIcon></StarRateIcon>}
              value={3}
              precision={0.5}
              style={{ marginLeft: "2px" }}
              readOnly
            />
          ))
        :     
        null}
      <p className="sidebarRow__title">{title}</p> */}
      {Icon && <Icon className="sidebarRow__icon" />}
      {title==='*****' || title==='****' || title === '***' ? ratingComponent: <p className="sidebarRow__title">{title}</p> }
    </div>
  );
};

export default SideBarRow;
