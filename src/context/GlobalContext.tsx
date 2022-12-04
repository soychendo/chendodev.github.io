import { createContext } from "react";

type ContextProps = {
  setMenu: void;
  menuBtn: boolean;
  input: object;
  setInput: () => void;
  setMenuBtn: () => boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: { preventDefault: () => void; }) => void;
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export { GlobalContext }
