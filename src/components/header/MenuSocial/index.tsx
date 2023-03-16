import React, { useEffect, useState } from "react";
import { MenuSocialDiv } from "./styles";

const MenuSocial = (): JSX.Element => {

  const [date, setDate] = useState<number | undefined>();
  // Get Year
  const getYear = () => setDate(new Date().getFullYear());
  // Render
  useEffect(() => {
    getYear();
  }, [])

  return(
    <MenuSocialDiv className="menu-social">
      <a href="https://github.com/chendodev" aria-label="github" target="_blank"><i className="fab fa-github"></i></a>
      <a href="https://www.youtube.com/@chendodev" aria-label="youtube" target="_blank"><i className="fab fa-youtube"></i></a>
      <a href="https://www.facebook.com/chendoio" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/chendodev" aria-label="instagram" target="_blank"><i className="fab fa-instagram"></i></a>
      <footer>Copyright @ {date}</footer>
    </MenuSocialDiv>
  );
}

export { MenuSocial };
