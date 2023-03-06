export type ContextProps = {
  setMenu: void;
  menuBtn: boolean;
  input: object;
  state: object;
  success: boolean;
  handleSubmit: unknown;
  setMenuBtn: () => boolean;
  onSubmit: (e: { preventDefault: () => void; }) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
}
