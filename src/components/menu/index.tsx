import type { HTMLAttributes } from "react";


type DivNative = HTMLAttributes<HTMLDivElement>

const Menu = ({ ...divProps }: DivNative): JSX.Element => {

 return (
  <div { ...divProps } >
    <div className="MenuBtn_burger"></div>
  </div>
 );
}

export { Menu };
