import { useReducer } from 'react';
import { cardReducer } from './cardReducer';

import { Transform, touch } from "../hooks/types";

const useCard = (): object => {

  const initialState = {
    touch: false,
    over: false,
  }
  const [state, dispatch] = useReducer(cardReducer, initialState);

  const transform: Transform = {
    transform: "translateY(4px) scale(0.95) translateZ(0px)",
    transformOver: "translateY(4px) scale(1.01) translateZ(0px)",
  }

  const transformStyle = {
    transform: state.touch
      ? transform.transform : state.over
      ? transform.transformOver : "none"
  }

  const onTouchStartHandle = () => dispatch({touch: touch.TOUCH_START});
  const onTouchEndHandle = () => dispatch({touch: touch.TOUCH_END});
  const onMouseDownHandle = () => dispatch({touch: touch.MOUSE_DOWN});
  const onMouseUpHandle = () => dispatch({touch: touch.MOUSE_UP});
  const onMouseLeaveHandle = () => dispatch({touch: touch.MOUSE_LEAVE});
  const onMouseOverHandle = () => dispatch({touch: touch.MOUSE_OVER});
  const onMouseOutHandle = () => dispatch({touch: touch.MOUSE_OUT});

  return {
    onTouchStartHandle,
    onTouchEndHandle,
    onMouseDownHandle,
    onMouseUpHandle,
    onMouseLeaveHandle,
    onMouseOverHandle,
    onMouseOutHandle,
    transformStyle
  };
}
export { useCard };
