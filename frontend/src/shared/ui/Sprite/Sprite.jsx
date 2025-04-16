import React from "react";

const Sprite = ({ icon, ...other }) => {
  return (
    <svg {...other}>
      <use xlinkHref={`./assets/icons.svg#${icon}`}></use>
    </svg>
  );
};

export default Sprite;
