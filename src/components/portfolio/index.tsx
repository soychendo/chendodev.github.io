import React from "react"
import { database } from "database/database";
import { Bartitle } from "../bartitle/Bartitle";
import { Card } from "./Card";

const Portfolio = (): JSX.Element => {

  const portfolio = "Portafolio";

  return(
    <main className="Portfolio">
      <Bartitle textBar={portfolio} />
      <section className="Card_menu pd-l">
        { database.map(card => (
          <Card
            key={card.id}
            data={card}
            className="col-md-4 col-lg-4 mb-4 transition"
          />
        ))}
      </section>
    </main>
  );
}

export default Portfolio;
