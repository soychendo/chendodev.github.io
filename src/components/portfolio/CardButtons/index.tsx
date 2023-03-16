
import React from "react";
import { goToLink } from "../../../utils/functions";
import { CardProps } from "../types";

const CardButtons = ( { data }: CardProps ): JSX.Element => {

  return (
    <div className="Card_buttons">
      <a
        onTouchStart={() => goToLink(data.demo)}
        href={data.demo}
        target="_blank">Demo</a>
      <a
        onTouchStart={() => goToLink(data.source)}
        href={data.source}
        target="_blank" >Code</a>
    </div>
  );
}

export { CardButtons };
