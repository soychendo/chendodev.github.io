
import React from "react";
import { goToLink } from "../../../utils/functions";
import { Tecno } from "@/database/database.model";

const CardTechnologies = ({ name, docs, stack }: Tecno ): JSX.Element => {

  return (
    <a
      key={name}
      href={docs}
      title={name}
      target="_blank"
      onTouchStart={() => goToLink(docs)}
    >
      <img src={stack} alt={name} />
    </a>
  );
}

export { CardTechnologies };
