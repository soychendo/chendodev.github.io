import type { HTMLAttributes } from "react";
import { ContainerButton, MenuButton } from "./styles";

type DivNative = HTMLAttributes<HTMLDivElement>

const Menu = ({ ...divProps }: DivNative): JSX.Element => {

 return (
  <ContainerButton { ...divProps } >
    <MenuButton className="MenuBtn_burger"></MenuButton>
  </ContainerButton>
 );
}

export { Menu };
