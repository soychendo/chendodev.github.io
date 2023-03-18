import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Nav, NavLink } from "./styles";
import { links } from "../data";

const ContainerNav = (): JSX.Element => {

  const { setMenuBtn } = useContext(GlobalContext);
  const setStyles = () => setMenuBtn(false);

  return (
    <Nav className="nav">
      {links.map(({ to, text, target }) => (
        <NavLink
          className="nav-link"
          to={to}
          onClick={setStyles}
          key={to}
          target={target}
        >
          {text}
        </NavLink>
      ))}
    </Nav>
  );
}

export { ContainerNav };
