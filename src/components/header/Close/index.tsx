import React, { useContext } from 'react';
import { GlobalContext } from "../../../context/GlobalContext";
import { CloseButton } from './styles';
import close from '@images/close.png'

const Close = (): JSX.Element => {

  const { setMenuBtn } = useContext(GlobalContext);

  return(
    <CloseButton onClick={() => setMenuBtn(false)} id='Close'>
      <img src={close} alt="close" />
    </CloseButton>
  );
}

export default Close;
