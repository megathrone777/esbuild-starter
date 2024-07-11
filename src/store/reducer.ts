import type { Reducer } from "react";

import { type TAction, type TStore, TActionTypes } from "./types";

const reducer: Reducer<TStore, ReturnType<TAction>> = (store, { payload, type }) => {
  console.info(payload);
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.ACTION_EXAMPLE]: () => store,
    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
