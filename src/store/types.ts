import React from "react";

export enum TActionTypes {
  ACTION_EXAMPLE = "ACTION_EXAMPLE",
  DEFAULT = "DEFAULT",
}

export interface TStore {
  products: object[];
}

export interface TAction<P = unknown> {
  (payload: P): {
    payload: P;
    type: TActionTypes;
  };
}

export interface TContext {
  dispatch: React.Dispatch<ReturnType<TAction>>;
  store: TStore;
}
