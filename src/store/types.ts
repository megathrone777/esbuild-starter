export enum TActionTypes {
  DO_SMTH = "DO_SMTH",
  DEFAULT = "DEFAULT",
}

export interface TStore {}

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
