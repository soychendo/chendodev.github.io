import React from "react";
import useMediaQuery from '@hooks/useMediaQuery';
import Menu from "@components/menu";

const Bartitle = ({ textBar }) => {

  const matches = useMediaQuery("(max-width: 992px)");

  return (
    <div className="bartitle">
      <h1>{ textBar }</h1>
      {matches ? <Menu /> : null}
    </div>
  );
}

export { Bartitle };
