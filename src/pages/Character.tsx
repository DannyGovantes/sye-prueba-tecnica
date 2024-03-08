import React, { useEffect, useState } from "react";
import { Table } from "../components";
import { useFetch } from "../hooks";

export function Character() {
  const { error, data, isLoading } = useFetch("/character");

  const [info, setInfo] = useState();

  useEffect(() => {
    setInfo(data);
    console.log(info);
  }, [data]);

  if (isLoading) {
    return <p> Is loading</p>;
  }

  if (error) {
    <p>Error</p>;
  }

  return (
    <div>
      {JSON.stringify(data)}
      <Table headers={data} isLoading={isLoading} results={data} />
    </div>
  );
}
