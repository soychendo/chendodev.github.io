
import React from "react";

const CardBody = ({ data }) => {

  return (
    <div className="Card_body">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export { CardBody };
