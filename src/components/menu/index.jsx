import React, { useContext } from "react";
import { GlobalContext } from '@context/GlobalContext';
import useMediaQuery from '@hooks/useMediaQuery';

const Menu = () => {

  const { setMenu, menuBtn } = useContext(GlobalContext);
  const matches = useMediaQuery("(max-width: 992px)");

 return (
  <div onClick={matches ? setMenu : null} id="Menu" className={menuBtn && matches ? "MenuBtn open" : "MenuBtn"}>
    <div className="MenuBtn_burger"></div>
  </div>
 );
}

export default Menu;
