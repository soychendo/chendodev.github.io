import React, { useContext, useState } from "react";
import {CardContext} from "../../context/Card/CardContext";
import Technologies from "../portfolio/Technologies";

const Card = ({items}) => {

  const { styles } = useContext(CardContext);

  const [touch, setTouch] = useState(false);
  const [over, setOver] = useState(false);

  const onTouchStartHandle = () => {
    setTouch(true)
  }
  const onTouchEndHandle = () => {
    setTouch(false)
  }
  const onMouseDownHandle = () => {
    setTouch(true)
  }
  const onMouseUpHandle = () => {
    setTouch(false)
  }
  const onMouseLeaveHandle = () => {
    setTouch(false)
  }
  const onMouseOverHandle = () => {
    setOver(true)
  }
  const onMouseOutHandle = () => {
    setOver(false)
  }

  return(
    <div className="col-md-4 col-lg-4 mb-4">
      <div
      onTouchStart={onTouchStartHandle}
      onTouchEnd={onTouchEndHandle}
      onMouseDown={onMouseDownHandle}
      onMouseUp={onMouseUpHandle}
      onMouseLeave={onMouseLeaveHandle}
      onMouseOver={onMouseOverHandle}
      onMouseOut={onMouseOutHandle}
      style={{transform: touch ? styles.transform : over ? styles.transformOver: "none"}}
      className="card"
      id={items.id}
      >
        <img src={`assets/${items.image}`} className="card-img-top" alt={items.title} />
        <div className="technologies">
          <Technologies data={items} />
        </div>
        <div className="card-body">
          <h2>{items.title}</h2>
          <p>{items.description}</p>
        </div>
        <div className="buttons">
          <a href={items.demo} target="_blank">Demo</a>
          <a href={items.source} target="_blank">Code</a>
        </div>
      </div>
    </div>
  );
}

export {Card};
