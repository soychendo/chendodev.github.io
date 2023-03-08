
import React from "react";
import { goToLink } from "../../utils/location";

const CardButtons = ({ data }) => {

  return (
    <div className="Card_buttons">
      <div className="button" onClick={() => goToLink(data.demo)} >Demo</div>
      <div className="button" onClick={() => goToLink(data.source)} >Code</div>
    </div>
  );
}

export { CardButtons };
