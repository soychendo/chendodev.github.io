import { DataBase } from "@/database/database.model"
import type { HTMLAttributes } from "react";

export type CardProps ={
  data: DataBase
}
export type divNative = HTMLAttributes<HTMLDivElement>;

export type Props = CardProps & divNative;
