import React from "react";
import { useFetch } from "../hooks";

export function Location() {
  const { error, data, isLoading } = useFetch("location");
  return <div>{JSON.stringify(data)}</div>;
}
