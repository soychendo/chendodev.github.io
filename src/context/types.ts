import type { FormEventHandler, ReactNode, ChangeEventHandler } from "react";

export type GlobalProviderTypes = {
  children: ReactNode
}
export type ContactForm = {
  name: string,
  email: string,
  message: string
}

type InstanceType = {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export type ContextProps = {
  handleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuBtn: boolean;
  name: string;
  email: string;
  message: string;
  success: boolean;
  loading: boolean;
  check: InstanceType
  setMenuBtn: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}
