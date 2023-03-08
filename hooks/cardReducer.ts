import { Action, State, touch } from "../hooks/types";

export const cardReducer = (state: State, action: Action) => {

  switch (action.touch) {
    case touch.TOUCH_START:
      return {
        ...state,
        touch: true,
      };
    case touch.TOUCH_END:
      return {
        ...state,
        touch: false
      };
    case touch.MOUSE_DOWN:
      return {
        ...state,
        touch: true
      };
    case touch.MOUSE_UP:
      return {
        ...state,
        touch: false
      };
    case touch.MOUSE_LEAVE:
      return {
        ...state,
        touch: false
      };
    case touch.MOUSE_OVER:
      return {
        ...state,
        over: true
      };
    case touch.MOUSE_OUT:
      return {
        ...state,
        over: false
      };
    default:
      return state;
  }

}
