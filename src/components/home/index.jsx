import React from "react"
import Mapa from '@assets/mapa.png';
import { Bartitle } from "@components/Bartitle";
import { Description } from "./Description";
import { SocialMedia } from "./SocialMedia";
import { init } from "@utils/TypeWriter";
import useMediaQuery from '@hooks/useMediaQuery';

const Home = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const home = "Home";

  return(
    <main onLoad={init} className="container-menu">
      <div  className="map"><img src={Mapa} alt="Background Image - @chendodev" /></div>
      <Bartitle textBar={home} />
      <div className="grid-menu mb-4 Home">
        <Description />
        { matches ? <SocialMedia /> : null }
      </div>
    </main>
  );
}

export default Home;

