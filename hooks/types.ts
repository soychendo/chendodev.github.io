import type {
  TouchEventHandler,
  MouseEventHandler,
} from 'react';

type transformTypes = {
  transform: string
}
export type OnTouch =  TouchEventHandler<HTMLDivElement>
export type OnMouse =  MouseEventHandler<HTMLDivElement>

export interface UseEffectCardTypes {
  touchstart: OnTouch
  touchend: OnTouch
  mousedown: OnMouse
  mouseup: OnMouse
  mouseleave: OnMouse
  mouseover: OnMouse
  mouseout: OnMouse
  transformStyle: transformTypes
}

export enum touch {
 TOUCH_START = "TOUCH_START",
 TOUCH_END = "TOUCH_END",
 MOUSE_DOWN = "MOUSE_DOWN",
 MOUSE_UP = "MOUSE_UP",
 MOUSE_LEAVE = "MOUSE_LEAVE",
 MOUSE_OVER = "MOUSE_OVER",
 MOUSE_OUT = "MOUSE_OUT",
}

export type State = {
  touch: boolean,
  over: boolean
}

export type Action = {
  touch: touch,
  payload?: boolean
}

export type Transform = {
  transform: string,
  transformOver: string
}

