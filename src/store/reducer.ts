import type { Reducer } from "react";

import { TAction, TActionTypes, TStore } from "./types";

const reducer: Reducer<TStore, ReturnType<TAction>> = (store, { payload, type }) => {
  console.info(payload);
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.DO_SMTH]: () => store,
    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
