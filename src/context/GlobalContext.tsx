import { createContext } from "react";

type ContextProps = {
  setMenu: void;
  menuBtn: boolean;
  input: object;
  state: object;
  active: boolean;
  handleSubmit: unknown;
  setMenuBtn: () => boolean;
  onSubmit: (e: { preventDefault: () => void; }) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export { GlobalContext }
