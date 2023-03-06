import { createContext } from "react";
import { ContextProps } from "./types";

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export { GlobalContext }
