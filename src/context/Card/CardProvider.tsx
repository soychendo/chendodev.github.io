
import React, { ReactNode } from 'react';
import { CardContext } from "./CardContext";
import { database } from '../../database/database';
import {Card} from '@components/portfolio/Card';

const CardProvider: React.FC<{}> = ({children}: { children?: ReactNode }) => {

  const data: JSX.Element[] = []

  const styles = {
    transform: "translateY(4px) scale(0.95) translateZ(0px)",
    transformOver: "translateY(4px) scale(1.01) translateZ(0px)",
  }

  database.forEach(items => {
    data.push(<Card key={items.id} items={items} />);
  });

  const valueDataState = {
    data,
    styles
  }

  const valueContext = {
    ...valueDataState,
  }

  return (
    <CardContext.Provider value={valueContext}>
      {children}
    </CardContext.Provider>
  );

}

export {CardProvider};
