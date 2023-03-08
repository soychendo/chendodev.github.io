import React from "react";
import { useCard } from "@hooks/useCard";
import { CardBody } from "./CardBody";
import { CardButtons } from "./CardButtons";
import { CardImage } from "./CardImage";
import { CardTechnologies } from "./CardTechnologies";

const Card = ({ data }) => {

  const {
    onTouchStartHandle,
    onTouchEndHandle,
    onMouseDownHandle,
    onMouseUpHandle,
    onMouseLeaveHandle,
    onMouseOverHandle,
    onMouseOutHandle,
    transformStyle
  } = useCard();

  return(
    <div
      className="col-md-4 col-lg-4 mb-4 transition"
      onTouchStart={onTouchStartHandle}
      onTouchEnd={onTouchEndHandle}
      onMouseDown={onMouseDownHandle}
      onMouseUp={onMouseUpHandle}
      onMouseLeave={onMouseLeaveHandle}
      onMouseOver={onMouseOverHandle}
      onMouseOut={onMouseOutHandle}
      style={transformStyle}
    >
      <div className="Card" id={data.id}>
        <CardImage data={data} />
        <div className="Technologies">
          {data.technologies.map(tech => (
            <CardTechnologies key={tech.name} tech={tech} />
          ))}
        </div>
        <CardBody data={data} />
        <CardButtons data={data} />
      </div>
    </div>
  );
}

export {Card};
