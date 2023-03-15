
import React from "react";
import { CardProps } from "./types";

const CardImage = ( { data }: CardProps ): JSX.Element => {

  return (
    <img
      src={`assets/${data.image}`}
      className="Card_img_top"
      alt={data.title}
    />
  );
}

export { CardImage };



