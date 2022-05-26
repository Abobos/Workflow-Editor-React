import { HTTPREQUESTMETHOD } from "hooks/useRequest";
import { createContext } from "react";

import { ObjectProps } from "./types";

const state = {
  error: "",
  loading: false,
  data: [],
  makeRequest: () => {},
};

type contextProps = {
  error: string | ObjectProps;
  loading: boolean;
  data: Array<ObjectProps>;
  makeRequest: <T>(data?: T, method?: HTTPREQUESTMETHOD, url?: string) => void;
};

const dataContext = createContext<contextProps>(state);

export default dataContext;
