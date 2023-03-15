import type { CSSProperties } from "react";

export type NavTypes = {
  isActive: boolean,
  isPending: boolean
}
export type GetLinkStyle = (isActive: boolean, isPending: boolean) => CSSProperties | undefined;

export type LinkStyle = (props: NavTypes) => CSSProperties | undefined;
