
import React from "react";

const CardTechnologies = ({ tech }) => {

  return (
    <a key={tech.name} href={tech.docs} target="_blank" title={tech.name}>
      <img src={tech.stack} alt={tech.name} />
    </a>
  );
}

export { CardTechnologies };
