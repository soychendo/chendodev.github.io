import React, { useContext } from 'react';
import { GlobalContext } from "@context/GlobalContext";
import close from '@images/close.png'

const Close = () => {

  const { handleClose } = useContext(GlobalContext);

  return(
    <div onClick={handleClose} id='Close'>
      <img src={close} alt="close" />
    </div>
  );
}

export default Close;
