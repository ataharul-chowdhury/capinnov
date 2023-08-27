import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "@mui/icons-material";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const [isAboutSubMenuActive, setIsAboutSubMenuActive] = useState(active === "about" ? true : false);
	const handleAboutMenu = () => setIsAboutSubMenuActive(!isAboutSubMenuActive)

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link onClick={() => handleAboutMenu()} className="about-menu" to="/about">About</Link>
								<div className={
									isAboutSubMenuActive === true
										? "about-submenu-active"
										: "about-submenu"
								}>
									<Link className="subnav-link" to="/research-program">
										Research Program
									<ArrowRight/></Link>
									<Link className="subnav-link" to="/asio">
										Advisory Service In Ontario
									<ArrowRight/></Link>
									<Link className="subnav-link" to="/gnf">
										Global Network Forum
									<ArrowRight/></Link>
									<Link className="subnav-link" to="/smac">
										Social Media for Agricultural COPs
									<ArrowRight/></Link>
								</div>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
