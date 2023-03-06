import React, {useContext} from "react"
import Menu from "@components/menu";
import useMediaQuery from '@hooks/useMediaQuery';
import { CardContext } from "../../context/Card/CardContext"

const Portfolio = () => {
  const matches = useMediaQuery("(max-width: 992px)");
  const {data} = useContext(CardContext)

  return(
    <main className="container-menu">
      <div className="bartitle">
        <h1>Portafolio</h1>
        {matches ? <Menu /> : null}
      </div>
      <div className="grid-menu pd-l portfolio-mb">
        {data}
      </div>
    </main>
  );
}

export default Portfolio;
