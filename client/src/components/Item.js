import React from "react";

const Item = ({ title, isDone }) => {
  return (
 
    <li>
    {title} {isDone ? "Done" : "Not Done"}
    </li>
  )
};

export default Item;
