import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalContext';
import useMediaQuery from '@hooks/useMediaQuery';
import { Menu } from "../menu";

type TextBar = { textBar?: string }

const Bartitle = ({ textBar }: TextBar): JSX.Element => {

  const { setMenuBtn, menuBtn } = useContext(GlobalContext);
  const matches = useMediaQuery("(max-width: 992px)");

  return (
    <div className="bartitle">
      <h1>{ textBar }</h1>
      {matches
      ? <Menu
        id="Menu"
        className="MenuBtn"
        onClick={() => setMenuBtn(!menuBtn)}
        />
      : null
      }
    </div>
  );
}

export { Bartitle };
