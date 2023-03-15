
import React from "react";
import { goToLink } from "../../utils/functions";
import { Tech } from "./types";

const CardTechnologies = ({ tech }: Tech ): JSX.Element => {

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
