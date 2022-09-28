import React from "react";
export function HeaderBottom({ Link }: any) {
  return (
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
  );
}
