import { HeaderBottom } from "../views/HeaderBottom";
import { HeaderIcons } from "../views/HeaderIcons";
import { FlexDiv } from "../views/flexDiv";
import { FullScreenfunction } from "../functions/fullScreenfunction";
import { ChangeTheme } from "../functions/ChangeTheme";
import { TableView } from "../views/tableView";
import avatar from "../../assets/avatar.avif";
import "../../styles/dashstyle.css";
import abbreviate from "number-abbreviate";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
function DashboardComponent() {
  const handle =
    useFullScreenHandle(); /* A hook that is used to control the fullscreen state. */
  const [isDarkMode, setisDarkMode] = useState(false);
  const [users, setusers] = useState(10000);
  const [profit, setprofit] = useState(1000);
  const [cost, setcost] = useState(200);
  const [renderPage, setrenderPage] = useState(false);
  const [renderContent, setrenderContent] = useState(false);
  const [dataSet, setdataSet] = useState(false);
  const changeTheme = () => {
    const body: any = document.querySelector("body");
    const fuls: any = document.querySelector(".fullscreen");
    /* Checking if the value of isDarkMode is false. */
    if (!isDarkMode) {
      setisDarkMode(true);
    } else {
      setisDarkMode(false);
    }
    console.log(isDarkMode ? "Light Mode" : "Dark Mode");
    isDarkMode
      ? (body.style.backgroundColor = "rgb(240, 240, 245)")
      : (body.style.backgroundColor = "rgb(26, 26, 60)");
    isDarkMode
      ? (fuls.style.backgroundColor = "rgb(240, 240, 245)")
      : (fuls.style.backgroundColor = "rgb(26, 26, 60)");
    isDarkMode
      ? localStorage.setItem("theme", "Light Mode")
      : localStorage.setItem("theme", "Dark Mode");
  };
  const abbreviate_user = abbreviate(users);
  const abbreviate_profit = abbreviate(profit);
  const abbreviate_cost = abbreviate(cost);
  useEffect(() => {
    renderPage ? RenderContent() : null;
    renderContent ? FetchAPIContent() : null;
  }, [renderContent]);

  const res = [
    {
      name: "Test",
    },
  ];

  let letter: any = useMemo(() => res, [res]);

  const RenderContent = () => {
    const getTheme = localStorage.getItem("theme");
    const body: any = document.querySelector("body");
    const fuls: any = document.querySelector(".fullscreen");
    if (getTheme === "Light Mode") {
      setisDarkMode(false);
      body.style.backgroundColor = "rgb(240, 240, 245)";
      fuls.style.backgroundColor = "rgb(240, 240, 245)";
    } else {
      setisDarkMode(true);
      body.style.backgroundColor = "rgb(26, 26, 60)";
      fuls.style.backgroundColor = "rgb(26, 26, 60)";
    }
  };
  const FetchAPIContent = useCallback(async () => {
    console.log("Fetched APIContent...");
    try {
      const response = await fetch("http://localhost:5301/app", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey:
          import.meta.env.VITE_CUSTOM_API_KEY,
        },
      });

      if (response.ok) {
        const result = await response.json();
        letter = result;
        localStorage.setItem("items", JSON.stringify(letter));
        setdataSet(true);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  const Load = () => {
    setrenderPage(true);
    setrenderContent(true);
  };
  return (
    <FullScreen handle={handle}>
      <div
        className={
          isDarkMode ? "DashboardComponent dark" : "DashboardComponent"
        }
        onLoad={Load}
      >
        <header>
          <div className="hd-top">
            <div className="hd-left">
              <div className="lft-logo">
                <h2>App</h2>
              </div>
              <div className="lft-input">
                <input type="text" placeholder="Search for results" />
                <i className="bx bx-search"></i>
              </div>
            </div>
            <div className="hd-right">
              <div className="f6">
                <ChangeTheme
                  changeTheme={changeTheme}
                  isDarkMode={isDarkMode}
                />
                <FullScreenfunction Mode={handle.enter} />
                <HeaderIcons avatar={avatar} />
              </div>
            </div>
          </div>
          <HeaderBottom Link={Link}/>
        </header>
        <main>
          <div className="main-top">
            <div className="y-content">
              <div className="cxt">Your Dashboard</div>
            </div>
            <div className="items">
              <div className="h2">
                <p>Total Users</p>
                <h3>{abbreviate_user}</h3>
              </div>
              <div className="h2">
                <p>Total Profit</p>
                <h3>{abbreviate_profit}</h3>
              </div>
              <div className="h2">
                <p>Total Cost</p>
                <h3>{abbreviate_cost}</h3>
              </div>
            </div>
            <FlexDiv MobileUsage={0} DesktopUsage={0} TabletUsage={0} />
            <div className="n5">
              {dataSet ? (
                <TableView data={localStorage.getItem("items")} />
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </FullScreen>
  );
}
export default DashboardComponent;
