import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalContext';
import useMediaQuery from '@hooks/useMediaQuery';
import { Menu } from "../Menu";
import { MenuWrapper } from "./styles";

type TextBar = { textBar?: string }

const Bartitle = ({ textBar }: TextBar): JSX.Element => {

  const { setMenuBtn, menuBtn } = useContext(GlobalContext);
  const matches = useMediaQuery("(max-width: 992px)");
  const mobile = useMediaQuery("(min-width: 480px)");

  return (
    <MenuWrapper className="bartitle">
      <h1>{ textBar }</h1>
      {matches && mobile
      ? <Menu
        id="Menu"
        className="MenuBtn"
        onClick={() => setMenuBtn(!menuBtn)}
        />
      : null
      }
    </MenuWrapper>
  );
}

export { Bartitle };
