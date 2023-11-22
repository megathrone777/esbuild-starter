import { TAction, TActionTypes } from "./types";

export const doSmth: TAction<null> = (payload) => ({
  payload,
  type: TActionTypes.DO_SMTH,
});
