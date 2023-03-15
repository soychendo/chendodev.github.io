import React, { useContext } from 'react';
import { GlobalContext } from "../../context/GlobalContext";
import close from '@images/close.png'

const Close = (): JSX.Element => {

  const { setMenuBtn } = useContext(GlobalContext);

  return(
    <div onClick={() => setMenuBtn(false)} id='Close'>
      <img src={close} alt="close" />
    </div>
  );
}

export default Close;
