import React from "react";
import { CardProps } from "../types";
import { CardBodyContainer } from "./styles";

const CardBody = ({ data }: CardProps): JSX.Element => {

  return (
    <CardBodyContainer>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </CardBodyContainer>
  );
}

export { CardBody };
