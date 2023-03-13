import type { MouseEventHandler, ReactNode } from "react";

export type GlobalProviderTypes = {
  children: ReactNode
}
export type ContactForm = {
  name: string,
  email: string,
  message: string
}

export type ContextProps = {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuBtn: boolean;
  input: object;
  state: object;
  success: boolean;
  handleSubmit: unknown;
  setMenuBtn: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (e: MouseEventHandler<HTMLButtonElement>) => {};
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {};
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}
