import React from "react"
import { Card } from "./Card";
import { database } from "database/database";
import { Bartitle } from "../bartitle/Bartitle";

const Portfolio = () => {

  const portfolio = "Portafolio";

  return(
    <main className="Portfolio">
      <Bartitle textBar={portfolio} />
      <section className="Card_menu pd-l">
        { database.map(card => (
          <Card
            key={card.id}
            data={card}
          />
        ))}
      </section>
    </main>
  );
}

export default Portfolio;
