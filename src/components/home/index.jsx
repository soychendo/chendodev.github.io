import React from "react"
import Mapa from '@images/mapa.png';
import { Bartitle } from "@components/bartitle/Bartitle";
import { Description } from "./Description";
import { SocialMedia } from "./SocialMedia";
import { init } from "@utils/TypeWriter";

const Home = () => {
  const home = "Home";

  return(
    <main onLoad={init} className="container-menu">
      <div  className="map"><img src={Mapa} alt="Background Image - @chendodev" /></div>
      <Bartitle textBar={home} />
      <div className="grid-menu mb-4">
        <Description />
        <SocialMedia />
      </div>
    </main>
  );
}

export default Home;

