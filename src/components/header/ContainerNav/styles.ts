import styled from "styled-components";
import { NavLink as NavLinkRouter } from "react-router-dom";

export const NavLink = styled(NavLinkRouter)`
  &[aria-current] {
    color: #42b883;
  }
`;

export const Nav = styled.nav`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    @media (max-width: 991px) {
      font-size: 1.7em;
    }

    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4vmax;
    text-transform: uppercase;
    color: rgba(235, 235, 235, .6);
    line-height: 0;
    margin-bottom: 1em;
    word-wrap: anywhere;
    cursor: pointer;
  }
`;
