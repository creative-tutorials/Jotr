import React from "react";
export function FullScreenfunction({ Mode }: any) {
  return (
    <span className="icon" onClick={Mode}>
      <i className="bx bx-exit-fullscreen"></i>
    </span>
  );
}
