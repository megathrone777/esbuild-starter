import { useContext } from "react";

import { AppContext, TContext } from "~/store";

const useStore = (): TContext => useContext(AppContext);

export { useStore };
