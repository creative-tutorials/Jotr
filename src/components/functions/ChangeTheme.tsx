import React from "react";
export function ChangeTheme({ changeTheme, isDarkMode }:any) {
  return (
    <span className="icon" onClick={changeTheme}>
      <i className={isDarkMode ? "bx bx-sun" : "bx bx-moon"}></i>
    </span>
  );
}
