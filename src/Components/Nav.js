import React from "react";
// import Icon from "../CoreComponents/ImpImg";
// import IsMobile from "../CoreComponents/IsMobile";
// import { Links } from "./Footer";

const Nav= ({ isNavOpen }) => (
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

export default Nav