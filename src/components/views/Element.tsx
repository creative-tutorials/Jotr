import { useState, useCallback, useEffect } from "react";
function Element(props: any) {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true);

    load ? loadCallback() : null;

    return () => {
      setload(false);
    };
  }, [load]);

  const loadCallback = useCallback(() => {
    if (load) {
      console.log("Reached 1 threshold");
      const createNewEl = document.createElement("tr");
      const tbody: any = document.querySelector("tbody");
      createNewEl.innerHTML = `
    <td id="appid">
            <div class="m5-1">
              <p>${props.appid}</p>
            </div>
          </td>
          <td id="appname">
            <div class="m5-1">
              <p>${props.appName}</p>
            </div>
          </td>
          <td id="releasedDate">
            <div class="m5-1">
              <p>${props.released}</p>
            </div>
          </td>
          <td id="domainURL">
            <div class="m5-1 m5-link">
              <a href=${props.domainURL}>${props.domainURL}</a>
            </div>
          </td>
          <td id="hostURL">
            <div class="m5-1 m5-link">
              <a href=${'http://localhost:' + props.Port}>${props.Port}</a>
            </div>
          </td>
          <td>
            <div class="m5-1 m5-success">
              <p id="codeStatus">${props.status}</p>
            </div>
          </td>
    `;

      tbody.appendChild(createNewEl);
    } else {
      console.log("cannot reach");
      setload(false);
    }
  }, [load]);

  return <></>;
}
export default Element;
