import React, { useEffect, useState } from "react"
import { database } from "database/database";
import { Bartitle } from "../Bartitle";
import { Card } from "./Card";
import { dragStart, onVisibility } from "../../utils/functions";
import { CardSkeleton, skeleton } from "./skeleton";

const Portfolio = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  const portfolio = "Portafolio";
  const classCard = "col-md-4 col-lg-4 mb-4 transition";

  useEffect(() => {
    setLoading(true)
    renderCard()
    setTimeout(() => {
      setLoading(false)
    }, 700);
  }, [])

  const renderSkeleton = () => (
   skeleton.map(item => <CardSkeleton key={item} />)
  )
  const renderCard = () => (
    database.map(card => (
      <Card key={card.id} data={card} className={classCard} />
    ))
  )

  return(
    <main onLoad={dragStart} className="Portfolio">
      <Bartitle textBar={portfolio} />
      <section onLoad={onVisibility} className="Card_menu pd-l">
        <>
        {loading && renderSkeleton()}
        {renderCard()}
        </>
      </section>
    </main>
  );
}

export default Portfolio;
