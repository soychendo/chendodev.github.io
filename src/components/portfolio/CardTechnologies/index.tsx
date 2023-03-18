
import React from "react";
import { Tecno } from "@/database/database.model";
import { TouchableAnchor } from "@components/Anchor";

const CardTechnologies = ({ name, docs, stack }: Tecno ): JSX.Element => {

  return (
    <TouchableAnchor
      url={docs}
      name={name}
    >
      <img src={stack} alt={name} />
    </TouchableAnchor>
  );
}

export { CardTechnologies };
