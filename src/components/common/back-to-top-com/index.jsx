import React, { useEffect } from "react";
import BackToTop from "../../../lib/back-to-top";

function BackToTopCom({ className }) {
  useEffect(() => {
    BackToTop(".scroll-top");
  });
  return (
    <button className={`scroll-top tran3s ${className || ""}`}>
      <i className="fa fa-angle-up" aria-hidden="true"></i>
    </button>
  );
}

export default BackToTopCom;
