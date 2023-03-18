import React from "react";
import { Nav, Link } from './styles'
import { MdHome, MdSubject, MdForwardToInbox, MdOutlineViewInAr, MdSettingsEthernet } from 'react-icons/md'

const MobileNav = () => {
  const CODE = 'https://github.com/chendodev/chendodev.github.io';
  const SIZE = '32px'

  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/about'><MdSubject size={SIZE} /></Link>
      <Link to='/contact'><MdForwardToInbox size={SIZE} /></Link>
      <Link to='/portfolio'><MdOutlineViewInAr size={SIZE} /></Link>
      <Link to={CODE} target='_blank'><MdSettingsEthernet size={SIZE} /></Link>
    </Nav>
  )

}

export { MobileNav };
