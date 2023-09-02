import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import AtaharulChowdhuryProfile from "../assets/ataharul-chowdhury-profile.jpg"

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import BasicTabs from "../components/homepage/details";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import { Box, Typography, ListItem, ListItemText, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import { Divider } from "@mui/material";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

    const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">

								<div className="title homepage-title">
									Literature Database
								</div>

								<div className="subtitle homepage-subtitle">
									Welcome to the misinformation literature database. A database curated by researchers around the globe
                                    working tirelessly towards enabling capacity development towards misinformation on the internet.
								</div>
							</div>

							{/* <div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={AtaharulChowdhuryProfile}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div> */}
						</div>

                        <br/><Divider /><br/>

                        {/* social media links */}
						{/* <div className="homepage-socials">
							<a href={INFO.socials.twitter} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="homepage-social-icon" /></a>
							<a href={INFO.socials.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="homepage-social-icon" /></a>
							<a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStackOverflow} className="homepage-social-icon" /></a>
							<a href={INFO.socials.instagram} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="homepage-social-icon" /></a>
							<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon" /></a>
						</div> */}

						{/* <br/><br/>
						<div className="homepage-details">
							<BasicTabs />
						</div> */}

						{/* <div className="homepage-projects">
							<AllProjects />
						</div> */}


                        <Box sx={{ width: "100%" }}>

                            <Box sx={{ borderBottom: 1, borderColor: "divider" }} >

                                {/* This it the mains tab panel with the scrollable variant */}
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" >
                                    <Tab className="tab-headers" label="Gallery View" {...a11yProps(0)} wrapped />
                                    <Tab className="tab-headers" label="Table View" {...a11yProps(1)} wrapped />
                                </Tabs>

                            </Box>

                            {/* This is where we define the Tabs and their contents */}
                            <CustomTabPanel className="tab-panels" value={value} index={0} >
                                <iframe src="https://airtable.com/embed/appjx6LLKDPfX3q0P/shrMSzsfSQzWRtbiN?backgroundColor=blue&viewControls=on" title="airtable-embed-gallery-view"
                                    frameborder="0" width="100%" height="700" style={{ background: 'transparent', border: '1px solid #ccc' }} class="airtable-embed">
                                </iframe>
                            </CustomTabPanel>

                            <CustomTabPanel className="tab-panels" value={value} index={1} >
                                <iframe src="https://airtable.com/embed/appjx6LLKDPfX3q0P/shr9p9GZCE6UIXT1Y?backgroundColor=blue&viewControls=on" title="aritable-embed-table-view"
                                    frameborder="0" width="100%" height="700" style={{ background: 'transparent', border: '1px solid #ccc' }} class="airtable-embed">
                                </iframe>
                            </CustomTabPanel>

                        </Box>

                        

                        <br/><Divider />

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
