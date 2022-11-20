import React, { useState, ReactNode, ContextType, createContext } from 'react';

const GlobalContext = createContext({} as ContextType<unknown | any> );

const GlobalProvider: React.FC<{}> = ({children}: { children?: ReactNode }) => {

  const [menuBtn, setMenuBtn] = useState(false);

  const setMenu = () => {
    setMenuBtn(!menuBtn);
  }

  return (
    <GlobalContext.Provider value={{setMenu, menuBtn, setMenuBtn}}>
    {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContext};
export {GlobalProvider};


