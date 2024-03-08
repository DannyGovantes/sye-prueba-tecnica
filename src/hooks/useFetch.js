import { useCallback, useEffect, useReducer } from "react";
import { client } from "../handlers/client";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT": {
      return { ...state, isLoading: true };
    }
    case "FETCH_SUCCESS": {
      return { ...state, isLoading: false, data: action.payload };
    }
    case "FETCH_ERROR": {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const useFetch = (url) => {
  const [{ isLoading, data, error }, dispatch] = useReducer(fetchReducer, {
    data: undefined,
    erro: undefined,
    isLoading: false,
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const res = await client(url);

      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, error, data };
};
