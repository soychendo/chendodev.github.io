
import React from "react";
import { goToLink } from "@utils/location";

const CardButtons = ({ data }) => {

  return (
    <div className="Card_buttons">
      <a onTouchStart={() => goToLink(data.demo)} href={data.demo} target="_blank">Demo</a>
      <a onTouchStart={() => goToLink(data.source)} href={data.source} target="_blank" >Code</a>
    </div>
  );
}

export { CardButtons };
