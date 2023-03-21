
import React from "react";
import { TouchableAnchor } from "@components/Anchor";
import { CardProps } from "../types";

const CardButtons = ( { data }: CardProps ): JSX.Element => {

  return (
    <div className="Card_buttons">
      <TouchableAnchor url={data.demo} >Demo</TouchableAnchor>
      <TouchableAnchor url={data.source} >Source</TouchableAnchor>
    </div>
  );
}

export { CardButtons };
