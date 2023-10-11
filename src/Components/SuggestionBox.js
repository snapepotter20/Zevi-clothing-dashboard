import React, { useEffect, useState } from "react";

const SuggestionBox = ({ filterValue }) => {
  const [avatars, setAvatars] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);


  useEffect(() => {
    console.log('filterValue',filterValue);
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const avatarList = data.data.slice(0, 5).map((user) => user.avatar);
        const first = data.data.map((user) => user.first_name);
        const last = data.data.map((user) => user.last_name);
        setAvatars(avatarList);
        setFirstName(first);
        setLastName(last);
      });
  }, []);

  useEffect(() => {
    const filtered = firstName.filter((item) =>
      item.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [filterValue, firstName]);


  return (
    <div className="suggestion-box">
      <h2>Latest trends</h2>
      <div className="avatars">
        <div className="avatars_div">
          {avatars.map((avatar, index) => (
            <img src={avatar} alt={`Avatar ${index}`} className="avatars_img" />
          ))}
        </div>
        <div>
          <h3>Popular suggestions</h3>
          {filteredItems
            .map((item, index) => (
              <p key={index}>{item}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;
