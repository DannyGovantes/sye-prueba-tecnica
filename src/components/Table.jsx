import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export function Table({ headers, results }) {
  return (
    <>
      <table>
        <tr>
          {results?.results ? (
            results.results.map((el) => {
              return <th key={el.id}>{Object.keys(el)}</th>;
            })
          ) : (
            <th>test</th>
          )}
          <th>test</th>
        </tr>
        <tr>
          <td>test</td>
        </tr>
      </table>
    </>
  );
}
