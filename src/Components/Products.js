import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Rating from "@material-ui/lab/Rating";
import StarRateIcon from "@material-ui/icons/StarRate";
// import { Style } from "@material-ui/icons";

const Products = () => {
  const [avatars, setAvatars] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [bgColor, setBgColor] = useState("white");
  const [colorIndex, setColorIndex] = useState(-1);
  const [hover, setHover] = useState();

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const avatarList = data.data.map((user) => user.avatar);
        const first = data.data.map((user) => user.first_name);
        const last = data.data.map((user) => user.last_name);
        setAvatars(avatarList);
        setFirstName(first);
        setLastName(last);
      });
  }, []);

  const changeBgColor = (index) => {
    setBgColor("red");
    if (colorIndex === index) setColorIndex(-1);
    else setColorIndex(index);
  };

  return (
    <div className="products">
      <div className="products_avatars_div">
        {/* <div className="image-container"> */}
        {avatars.map((avatar, index) => (
          <div className="image-container">
            <img
              src={avatar}
              alt={`Avatar ${index}`}
              className="products_avatars_img"
              key={index}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(-1)}
            />
            {ProductCard.map((item) => (
              <div>
                <p>{"Turtle " + item.title}</p>
                <p>
                  {" "}
                  <strike>Rs.899</strike> {item.price}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ffffff",
                  }}
                >
                  <Rating
                    size="small"
                    icon={<StarRateIcon></StarRateIcon>}
                    value={5}
                    precision={0.5}
                    style={{ marginLeft: "-5px" }}
                    readOnly
                  />
                  <p>(210)</p>
                </div>
              </div>
            ))}
            <div className="icon-overlay">
              <FavoriteBorderIcon
                fontSize="medium"
                className="icon"
                onClick={() => changeBgColor(index)}
                style={{ color: colorIndex === index ? bgColor : "#fff" }}
              />
            </div>
            {hover === index && (
              <button className="view_product">View Product</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
