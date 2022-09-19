import avatar from "../../assets/avatar.avif";
import "../../styles/dashstyle.css";
import abbreviate from "number-abbreviate";
import { Link, Form } from "react-router-dom";
import { useState, useRef } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
function DashboardComponent() {
  const handle = useFullScreenHandle();
  const [isDarkMode, setisDarkMode] = useState(false);
  const [users, setusers] = useState(10000);
  const [profit, setprofit] = useState(1000);
  const [cost, setcost] = useState(200);
  const dashCompnt: any = useRef();
  const changeTheme = () => {
    const body: any = document.querySelector("body");
    const fuls: any = document.querySelector('.fullscreen');
    const dashCompnts = dashCompnt.current;
    if (!isDarkMode) {
      setisDarkMode(true);
    } else {
      setisDarkMode(false);
    }
    console.log(isDarkMode ? "Dark Mode" : "Normal Mode");
    isDarkMode
      ? (body.style.backgroundColor = "rgb(26, 26, 60)")
      : (body.style.backgroundColor = "rgb(240, 240, 245)");
    isDarkMode
      ? (fuls.style.backgroundColor = "rgb(26, 26, 60)")
      : (fuls.style.backgroundColor = "rgb(240, 240, 245)");
  };
  const abbreviate_user = abbreviate(users);
  const abbreviate_profit = abbreviate(profit);
  const abbreviate_cost = abbreviate(cost);
  return (
    <FullScreen handle={handle}>
      <div
        className={
          isDarkMode ? "DashboardComponent" : "DashboardComponent dark"
        }
        ref={dashCompnt}
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
                <span className="icon" onClick={changeTheme}>
                  <i className="bx bx-moon"></i>
                </span>
                <span className="icon" onClick={handle.enter}>
                  <i className="bx bx-exit-fullscreen"></i>
                </span>
                <span className="icon">
                  <i className="bx bx-bell"></i>
                </span>
                <span className="icon">
                  <i className="bx bx-message-square"></i>
                </span>
                <span className="avr">
                  <img src={avatar} alt="avatar" width={40} height={40} />
                </span>
              </div>
            </div>
          </div>
          <div className="hd-btm">
            <div className="hd-btm-links">
              <Link to="/">
                <i className="bx bxs-dashboard"></i> Dashboard
              </Link>
              <Link to="/">
                <i className="bx bxs-zap"></i> Landing Page
              </Link>
              <Link to="/users">
                <i className="bx bx-user"></i> Users
              </Link>
              <Link to="/add">
                <i className="bx bxs-folder-plus"></i> Add
              </Link>
            </div>
          </div>
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
            <div className="flex-n9">
              <div className="n9">
                <div className="n9-cols">
                  <div className="n9-cols-left">
                    <div className="_txt">Device</div>
                    <div className="devices_list">
                      <span id="devices">
                        <i className="bx bx-mobile-alt"></i>
                        <span id="deviceCategory">Mobile</span>
                      </span>
                      <span id="devices">
                        <i className="bx bx-desktop"></i>
                        <span id="deviceCategory">Desktops</span>
                      </span>
                      <span id="devices">
                        <i className="bx bx-devices"></i>
                        <span id="deviceCategory">Tablets</span>
                      </span>
                    </div>
                  </div>
                  <div className="n9-cols-right">
                    <div className="_txt">Usage</div>
                    <div className="usage_list">
                      <span id="useAge">{0}</span>
                      <span id="useAge">{0}</span>
                      <span id="useAge">{0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="n5">
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
                    <td>
                      <div className="m5-1">
                        <p>918271</p>
                      </div>
                    </td>
                    <td>
                      <div className="m5-1">
                        <p>reactapp</p>
                      </div>
                    </td>
                    <td>
                      <div className="m5-1">
                        <p>June 2010</p>
                      </div>
                    </td>
                    <td>
                      <div className="m5-1 m5-link">
                        <Link to="/">http://bit.ly</Link>
                      </div>
                    </td>
                    <td>
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
            </div>
          </div>
        </main>
      </div>
    </FullScreen>
  );
}
export default DashboardComponent;
