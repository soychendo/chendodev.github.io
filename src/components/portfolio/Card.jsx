import React, { useState } from "react";

import { database } from 'database/database';

const Card = ({data, id}) => {

  const [click, setClik] = useState(false);
  const [over, setOver] = useState(false);

  // Card Animation - click Over
  const handleMouseDown = () => ( setClik(true) );
  const handleMouseAll = () => ( setClik(false) );
  const handleMouseOver = () => ( setOver(true) );
  const handleMouseOut = () => ( setOver(false) );
  // Click OnCard
  const onclickCard = () => {
    database.forEach(data => (id == data.id ? window.open(data.demo, "_blank") : null));
  }

  const styles = {
    transform: "translateY(4px) scale(0.95) translateZ(0px)",
    transformOver: "translateY(4px) scale(1.01) translateZ(0px)",
  }

  return(
    <div className="col-md-4 col-lg-4 mb-4">
      <div
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseAll}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseAll}
      onMouseLeave={handleMouseAll}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onclickCard}
      style={{transform: click ? styles.transform : over ? styles.transformOver: "none"}}
      className="card"
      id={data.id}
      >
        <img src={`assets/${data.image}`} className="card-img-top" alt={data.title} />
        <div className="card-body">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
