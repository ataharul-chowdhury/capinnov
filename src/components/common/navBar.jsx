import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "@mui/icons-material";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const [isResearchSubMenuActive, setIsResearchSubMenuActive] = useState(active === "research" ? true : false);
	const handleResearchMenu = () => setIsResearchSubMenuActive(!isResearchSubMenuActive)

	const [isTeachingSubMenuActive, setIsTeachingSubMenuActive] = useState(active === "teaching" ? true : false);
	const handleTeachingMenu = () => setIsTeachingSubMenuActive(!isTeachingSubMenuActive)

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">

							{/* Link to the Home Page */}
							<li className = { active === "home" ? "nav-item active" : "nav-item" } >
								<Link to = "/capinnov"> Home </Link>
							</li>

							{/* Link to the Research Page */}
							<li className = { active === "research" ? "nav-item active" : "nav-item" } >
								<Link onClick = {() => handleResearchMenu()} className = "research-menu" to = "/research-program"> Research </Link>

								{/* Link to the Research Sub Menu */}
								<div className = { isResearchSubMenuActive === true ? "research-submenu-active" : "research-submenu" } >
									<Link className = "subnav-link" to = "/research-program"> Research Program <ArrowRight/></Link>
									<Link className = "subnav-link" to = "/asio"> Advisory Service In Ontario <ArrowRight/></Link>
									<Link className = "subnav-link" to = "/gnf"> Global Network Forum <ArrowRight/></Link>
									<Link className = "subnav-link" to = "/smac"> Social Media for Agricultural COPs <ArrowRight/></Link>
								</div>
							</li>

							{/* Link to the Teaching Page */}
							<li className = { active === "teaching" ? "nav-item active" : "nav-item" } >
								<Link onClick = {() => handleTeachingMenu()} className = "teaching-menu" to = "/teaching-philosophy"> Teaching </Link>

								{/* Link to the Teaching Sub Menu */}
								<div className = { isTeachingSubMenuActive === true ? "teaching-submenu-active" : "teaching-submenu" } >
									<Link className = "subnav-link" to = "/teaching-philosophy"> Teaching Philosophy <ArrowRight/></Link>
									<Link className = "subnav-link" to = "/courses-taught"> Courses Taught <ArrowRight/></Link>
									<Link className = "subnav-link" to = "/gnf"> Current Students <ArrowRight/></Link>
									<Link className = "subnav-link" to = "/smac"> Past Students <ArrowRight/></Link>
									<Link className = "subnav-link" to = "/smac"> Professional Development <ArrowRight/></Link>
								</div>
							</li>

							{/* Link to the Articles Page */}
							<li className = { active === "articles" ? "nav-item active" : "nav-item" } >
								<Link to = "/articles"> Articles </Link>
							</li>

							{/* Link to the Contact Page */}
							<li className = { active === "contact" ? "nav-item active" : "nav-item" } >
								<Link to = "/contact"> Contact </Link>
							</li>

						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
