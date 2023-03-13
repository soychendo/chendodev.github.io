
import React from "react";

const CardImage = ({ data }) => {

  return (
    <img
      src={`assets/${data.image}`}
      className="Card_img_top"
      alt={data.title}
    />
  );
}

export { CardImage };



