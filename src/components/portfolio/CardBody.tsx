import React from "react";
import { CardProps } from "./types";

const CardBody = ({ data }: CardProps): JSX.Element => {

  return (
    <div className="Card_body">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export { CardBody };
