import React from "react";
import ReactDOM from "react-dom/client";
import Elem from "./Element";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
export function TableView(props: any) {
  let isLoaded = true;
  useEffect(() => {
    if (!isLoaded) renderUseState();
    else null;
    return () => {
      isLoaded = false;
    };
  }, [props]);

  const returendData = useMemo(() => props.data, [props.data]);

  const tableBody: any = useRef();
  // console.log(data);
  // const mappedData = data.map((items: any) => {
  //   console.log(items);
  // });

  const renderUseState = useCallback(() => {
    const data = JSON.parse(returendData);
    const mappedData = data.map((items: any) => {
      ReactDOM.createRoot(
        document.querySelector("tbody") as HTMLElement
      ).render(
        <React.StrictMode>
          <Elem
            appName={items.appname}
            appid={items.appid}
            released={items.releasedDate}
            domainURL={items.domainURL}
            Port={items.Port}
            status={items.status}
          />
        </React.StrictMode>
      );
    });
    if (!data) {
      console.log("failed to fetch props data");
    } else {
      console.log("fetched props data");
      console.log(data);
    }
  }, []);

  return (
    <table>
      <thead>
        <tr role={"row"} className="row">
          <th>App ID</th>
          <th>App name</th>
          <th>Released Date</th>
          <th>Domain URL</th>
          <th>Host URL</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody ref={tableBody}></tbody>
    </table>
  );
}
