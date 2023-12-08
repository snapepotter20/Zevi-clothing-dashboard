import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import Rating from "@material-ui/lab/Rating";

const SideBarRow = ({ Icon, title }) => {
  let ratingComponent = null;

  if (title === 5) {
    ratingComponent = (
      <Rating
        size="small"
        icon={<StarRateIcon />}
        value={title}
        precision={0.5}
        style={{ marginLeft: "2px" }}
        readOnly
      />
    );
  } else if (title === 4) {
    ratingComponent = (
      <Rating
        size="small"
        icon={<StarRateIcon />}
        value={title}
        precision={0.5}
        style={{ marginLeft: "2px" }}
        readOnly
      />
    );
  } else if (title === 3) {
    ratingComponent = (
      <Rating
        size="small"
        icon={<StarRateIcon />}
        value={title}
        precision={0.5}
        style={{ marginLeft: "2px" }}
        readOnly
      />
    );
  }

  return (
    <div className={"sidebarRow"}>
      {Icon && <Icon className="sidebarRow__icon" />}
      {title === 5 || title === 4 || title === 3 ? (
        ratingComponent
      ) : (
        <p className="sidebarRow__title">{title}</p>
      )}
      
    </div>
  );
};

export default SideBarRow;
