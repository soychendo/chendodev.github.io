import { useReducer } from 'react';
import { cardReducer } from './cardReducer';
import useMediaQuery from '@hooks/useMediaQuery';
import { Transform, touch, UseEffectCardTypes, OnTouch, OnMouse } from "./types";

const useEffectCard = (): UseEffectCardTypes => {

  const initialState = {
    touch: false,
    over: false,
  }
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const matches: boolean = useMediaQuery("(min-width: 778px)");

  const transform: Transform = {
    transform: "translateY(4px) scale(0.95) translateZ(0px)",
    transformOver: "translateY(4px) scale(1.01) translateZ(0px)",
  }

  const transformStyle = {
    transform: state.touch
      ? transform.transform : state.over && matches
      ? transform.transformOver : "none"
  }
  // On mobile devices
  const touchstart: OnTouch = () => dispatch({touch: touch.TOUCH_START});
  const touchend: OnTouch = () => dispatch({touch: touch.TOUCH_END});
  // Mouse events
  const mousedown: OnMouse = () => dispatch({touch: touch.MOUSE_DOWN});
  const mouseup: OnMouse = () => dispatch({touch: touch.MOUSE_UP});
  const mouseleave: OnMouse = () => dispatch({touch: touch.MOUSE_LEAVE});
  const mouseover: OnMouse = () => dispatch({touch: touch.MOUSE_OVER});
  const mouseout: OnMouse = () => dispatch({touch: touch.MOUSE_OUT});

  return {
    touchstart,
    touchend,
    mousedown,
    mouseup,
    mouseleave,
    mouseover,
    mouseout,
    transformStyle
  };
}
export { useEffectCard };
