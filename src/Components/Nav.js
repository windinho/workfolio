import React from "react";
// import Icon from "../CoreComponents/ImpImg";
// import IsMobile from "../CoreComponents/IsMobile";
// import { Links } from "./Footer";

// export const Links = (where) => {
// 	return [
// 		{ text: "About", href: "/about-us" },
// 		{ text: "Work", href: "/work" },
// 		{ text: "Hire Us", href: "/hire-us" },
// 	].map(({ text, href }, i) => {
// 		let a = <a href={href}>{text}</a>;
// 		return <li key={i}>{where === "nav" ? <h4>{a}</h4> : <>{a}</>}</li>;
// 	});
// };

const Nav = ({ isNavOpen }) => (
  <div className={`nav-menu ${!isNavOpen ? "close" : ""}`}>
    <ul>
      <li className="title">Menu:</li>
      {/* {Links("nav")} */}
      <li className="social">
        {/* {!IsMobile() && <Icon name="social" />} */}
      </li>
    </ul>
  </div>
);

export default Nav;
