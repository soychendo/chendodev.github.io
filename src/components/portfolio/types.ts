import { DataBase, Tecno } from "@/database/database.model"
import type { HTMLAttributes } from "react";

export type CardProps ={
  data: DataBase
}
export type Tech = {
  tech: Tecno
}

export type divNative = HTMLAttributes<HTMLDivElement>;

export type Props = CardProps & divNative;
