import { createContext } from "react";
import { CardContextType } from "./types";

const CardContext = createContext<CardContextType>({} as CardContextType);
export { CardContext }
