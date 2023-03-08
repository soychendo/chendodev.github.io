
import React from "react";
import { goToLink } from "@utils/location";

const CardTechnologies = ({ tech }) => {

  return (
    <a
      key={tech.name}
      href={tech.docs}
      title={tech.name}
      target="_blank"
      onTouchStart={() => goToLink(tech.docs)}
    >
      <img src={tech.stack} alt={tech.name} />
    </a>
  );
}

export { CardTechnologies };
