import { type TAction, TActionTypes } from "./types";

export const actionExample: TAction<null> = (payload) => ({
  payload,
  type: TActionTypes.ACTION_EXAMPLE,
});
