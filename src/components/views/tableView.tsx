import React from "react";
import { Link} from "react-router-dom";
import { useEffect } from "react";
export function TableView(props:any) {
    useEffect(() => {
        
    }, [props])
    
    const lol = JSON.parse(props.data)
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
      <tbody>
        <tr>
          <td id="appid">
            <div className="m5-1">
              <p>{lol[0].appid}</p>
            </div>
          </td>
          <td id="appname">
            <div className="m5-1">
              <p>reactapp</p>
            </div>
          </td>
          <td id="releasedDate">
            <div className="m5-1">
              <p>June 2010</p>
            </div>
          </td>
          <td id="domainURL">
            <div className="m5-1 m5-link">
              <Link to="/">http://bit.ly</Link>
            </div>
          </td>
          <td id="hostURL">
            <div className="m5-1 m5-link">
              <Link to="/">http://localhost:3000</Link>
            </div>
          </td>
          <td>
            <div className="m5-1 m5-success">
              <p>Shipped</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
