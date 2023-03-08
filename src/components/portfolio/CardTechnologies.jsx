
import React from "react";
import { goToLink } from "@utils/location";

const CardTechnologies = ({ tech }) => {

  return (
    <div className="tech" key={tech.name} title={tech.name}>
      <img onClick={() => goToLink(tech.docs)} src={tech.stack} alt={tech.name} />
    </div>
  );
}

export { CardTechnologies };
