import React from "react";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
export function TableView(props: any) {
  const [loadComponent, setloadComponent] = useState(false);
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

  const renderUseState = useCallback(() => {
    const createel = document.createElement("tr");
    console.log(JSON.parse(returendData));
    const xa = JSON.parse(props.data);
    const newMap = xa.map((items: any) => {
      console.log(items);
      createel.innerHTML = `
      <td id="appid">
        <div class="m5-1">
          <p>${items.appid}</p>
        </div>
      </td>
      <td id="appname">
        <div class="m5-1">
          <p>${items.appname}</p>
        </div>
      </td>
      <td id="releasedDate">
        <div class="m5-1">
          <p>${items.releasedDate}</p>
        </div>
      </td>
      <td id="domainURL">
        <div class="m5-1 m5-link">
          <Link to="/">${items.domainURL}</Link>
        </div>
      </td>
      <td id="hostURL">
        <div class="m5-1 m5-link">
          <Link to="/">${items.hostURL}</Link>
        </div>
      </td>
      <td>
        <div class="m5-1 m5-success">
          <p>${items.status}</p>
        </div>
      </td>`;
    });
    tableBody.current.appendChild(createel);
  }, []);

  return (
    <table>
      <thead>
        <tr role={"row"}>
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
