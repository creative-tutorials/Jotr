import React from "react";
export function HeaderIcons({ avatar }:any) {
  return (
    <>
      <span className="icon">
        <i className="bx bx-bell"></i>
      </span>
      <span className="icon">
        <i className="bx bx-message-square"></i>
      </span>
      <span className="avr">
        <img src={avatar} alt="avatar" width={40} height={40} />
      </span>
    </>
  );
}
