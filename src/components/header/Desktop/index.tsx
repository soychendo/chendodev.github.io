import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import { ContextProps } from "@context/types";
import useMediaQuery from '@hooks/useMediaQuery';
import Master from "@assets/master.jpg";
import { MenuSocial } from "@components/header/MenuSocial";
import { ContainerNav } from "@components/header/ContainerNav";
import Close from "@components/header/Close";

const Desktop = (): JSX.Element => {

  const { menuBtn } = useContext<ContextProps>(GlobalContext);
  const matches = useMediaQuery("(max-width: 992px)");

  return(
    <header>
      <div className={menuBtn && matches ? "navigation transform" : "navigation"}>
        <div className="container">
          { matches ? <Close /> : null }
          <div className="row-cont">
            <div className="col-img">
              <div className="pulse">
                <a href="/"><img src={Master} alt="Master" /></a>
                <span>chendo</span>
                <span className="span">@chendodev</span>
              </div>
            </div>
            <div className="col-menu">
              <ContainerNav />
            </div>
            <MenuSocial />
          </div>
        </div>
      </div>
    </header>
  );
}

export {Desktop};
