import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { GlobalContext } from "../../../context/GlobalContext";
import { Nav } from "./styles";
import { GetLinkStyle, LinkStyle } from "../types";
import { links } from "../data";

const ContainerNav = (): JSX.Element => {

  const { setMenuBtn } = useContext(GlobalContext);

  const getLinkStyle: GetLinkStyle = (isActive, isPending) =>
    (isActive && !isPending) ? { color: "#42b883" } : undefined;

  const linkStyle: LinkStyle = ({ isActive, isPending }) => getLinkStyle(isActive, isPending);
  const setStyles = () => setMenuBtn(false);

  return (
    <Nav className="nav">
      {links.map(({ to, text, target }) => (
        <NavLink
          className="nav-link"
          to={to}
          onClick={setStyles}
          style={linkStyle}
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
