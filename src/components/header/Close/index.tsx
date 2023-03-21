import React, { useContext } from 'react';
import { GlobalContext } from "@context/GlobalContext";
import { ContextProps } from '@context/types';
import { CloseButton } from './styles';
import close from '@assets/close.png'

const Close = (): JSX.Element => {

  const { setMenuBtn } = useContext<ContextProps>(GlobalContext);

  return(
    <CloseButton onClick={() => setMenuBtn(false)} id='Close'>
      <img src={close} alt="close" />
    </CloseButton>
  );
}

export default Close;
