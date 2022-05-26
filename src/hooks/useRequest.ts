import { ObjectProps } from "context/types";
import { useCallback, useReducer } from "react";

const initialState = {
  error: "",
  loading: false,
  data: [],
};

type reducerState = {
  error: string;
  loading: boolean;
  data: Array<ObjectProps>;
};

type actionType = {
  type: string;
  payload?: any;
  error?: any;
};
export enum HTTPREQUESTMETHOD {
  POST = "POST",
  GET = "GET",
}

const reducerFunction = (state: reducerState, action: actionType) => {
  switch (action.type) {
    case "error":
      return { ...state, loading: !state.loading, error: action.error };
    case "data":
      return { ...state, loading: !state.loading, data: action.payload };
    case "loading":
      return { ...state, loading: !state.loading };
    default:
      throw new Error("No action found");
  }
};

const useRequest = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const { error, data, loading } = state;

  const makeRequest = useCallback(
    async <T>(
      data: T,
      method: HTTPREQUESTMETHOD = HTTPREQUESTMETHOD.GET,
      url: string = "http://localhost:8080/api/v1/workflows"
    ) => {
      dispatch({ type: "loading" });

      try {
        let response;

        if (method === HTTPREQUESTMETHOD.POST) {
          response = await (
            await fetch(url, {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(data),
            })
          ).json();
        } else {
          response = await (await fetch(url)).json();
        }

        dispatch({ type: "data", payload: response.data });
      } catch (err: any) {
        dispatch({ type: "error", error: err.message });
      }
    },
    [dispatch]
  );

  return [data, error, loading, makeRequest];
};

export default useRequest;
