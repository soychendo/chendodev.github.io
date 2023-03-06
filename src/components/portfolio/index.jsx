import React from "react"
import { faker } from '@faker-js/faker';
import Menu from "@components/menu";
import useMediaQuery from '@hooks/useMediaQuery';

import { database } from "database/database";
import Card from "@components/portfolio/Card";

const Portfolio = () => {
  const matches = useMediaQuery("(max-width: 992px)");

  const card = [];
  database.forEach(data => {
    card.push(<Card key={faker.datatype.uuid()} data={data} />)
  });

  return(
    <main className="container-menu">
      <div className="bartitle">
        <h1>Portafolio</h1>
        {matches ? <Menu /> : null}
      </div>
      <div className="grid-menu pd-l portfolio-mb">
        {card}
      </div>
    </main>
  );
}

export default Portfolio;
