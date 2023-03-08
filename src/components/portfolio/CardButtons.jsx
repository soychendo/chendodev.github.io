
import React from "react";

const CardButtons = ({ data }) => {

  return (
    <div className="Card_buttons">
      <a href={data.demo} target="_blank">Demo</a>
      <a href={data.source} target="_blank">Code</a>
    </div>
  );
}

export { CardButtons };
