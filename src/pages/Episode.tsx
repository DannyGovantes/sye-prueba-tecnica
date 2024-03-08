import React from "react";
import { useFetch } from "../hooks";

export function Episode() {
  const { error, data, isLoading } = useFetch("/episode");
  return <div>{JSON.stringify(data)}</div>;
}
