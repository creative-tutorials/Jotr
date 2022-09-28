import React from "react";
export function FlexDiv({MobileUsage, DesktopUsage, TabletUsage}:any) {
  return (
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
              <span id="useAge">{MobileUsage}</span>
              <span id="useAge">{DesktopUsage}</span>
              <span id="useAge">{TabletUsage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
