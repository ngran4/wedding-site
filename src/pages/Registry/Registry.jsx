import React from "react";
import "./Registry.css"

const primaryGreen = getComputedStyle(
  document.documentElement
).getPropertyValue("--primary-green");

const Registry = () => {
  return (
    <div className="registry__container">
      <div className="registry-hero">
      If you'd like to help us toast to our next chapter, we've set up a{" "}
      <a
        href="https://registry.theknot.com/--september-2025-wa/68898013"
        id="honeyfund"
        style={{ color: primaryGreen }}
      >
        HONEYMOON FUND
      </a>{" "}
      for our postnuptial adventure. 
      <br/>
      <div style={{ paddingTop: "70px"}}>
        Any gift means so much and will help us
        make memories to last a lifetime :)
      </div>
      </div>
    </div>
  );
};

export default Registry;
