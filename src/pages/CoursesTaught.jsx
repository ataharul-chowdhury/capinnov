import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import { Timeline } from "react-twitter-widgets";
import "./styles/about.css";
import {
	ListItem,
	ListItemText,
	Typography,
	Box,
	Divider
} from "@mui/material";

import PropTypes from "prop-types";
import YoutubeEmbed from "../components/common/youtube-embed"

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

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
                                    Courses Taught
								</div>
								<div className="subtitle about-subtitle">
									<ListItem>
										<ListItemText
                                            primary="University of Guelph"
											secondary={
												<>
													<p>
                                                        <li><i><strong>EDRD 6000:</strong> Qualitative Analysis</i></li>
                                                        <li><i><strong>CDE 6290 (2) Special Topic:</strong> Project Management in CDE</i></li>
                                                        <li><i><strong>CDE 6290 (1) Special Topic:</strong> ICT Stewardship and Development</i></li>
                                                        <li><i><strong>CDE 6311:</strong> Community Engagement</i></li>
                                                        <li><i><strong>POLS 6750:</strong> Development in Practice</i></li>
                                                        <li><i><strong>EDRD 2020:</strong> Interpersonal Communication</i></li>
                                                        <li><i><strong>EDRD 3160:</strong> International Communication</i></li>
                                                        <li><i><strong>POLS 3320:</strong> Politics of Foreign Aid and Development</i></li>
													</p>
												</>
											}
											secondaryTypographyProps={{ fontSize: "16px", textAlign: "justify" }}
                                            primaryTypographyProps={{ color: "black" }}
										/>
									</ListItem>

                                    <ListItem>
										<ListItemText
                                            primary="The University of the West Indies"
											secondary={
												<>
													<p>
                                                        <li><i><strong>AGEX 6003:</strong> Trends and Emerging Issues in Agricultural Extension</i></li>
                                                        <li><i><strong>AGEX 3004:</strong> Communication Skills for Professionals</i></li>
                                                        <li><i><strong>AGEX 2001: </strong> Operation and Management of Extension Programme</i></li>
													</p>
												</>
											}
											secondaryTypographyProps={{ fontSize: "16px", textAlign: "justify" }}
                                            primaryTypographyProps={{ color: "black" }}
										/>
									</ListItem>

                                    <ListItem>
										<ListItemText
                                            primary="McMaster University"
											secondary={
												<>
													<p>
                                                        <li><i><strong>CMST 2DD3:</strong> Media and Organization</i></li>
													</p>
												</>
											}
											secondaryTypographyProps={{ fontSize: "16px", textAlign: "justify" }}
                                            primaryTypographyProps={{ color: "black" }}
										/>
									</ListItem>

                                    <ListItem>
										<ListItemText
                                            primary="Humber College"
											secondary={
												<>
													<p>
                                                        <li><i><strong>IDS 3303:</strong> Management Information System</i></li>
													</p>
												</>
											}
											secondaryTypographyProps={{ fontSize: "16px", textAlign: "justify" }}
                                            primaryTypographyProps={{ color: "black" }}
										/>
									</ListItem>

                                    <ListItem>
										<ListItemText
                                            primary="Bangladesh Agricultural University"
											secondary={
												<>
													<p>
                                                        <li><i><strong>AEE322:</strong> Agricultural Extension Education</i></li>
                                                        <li><i><strong>AgExt. 221:</strong> Fundamentals of Extension & Leadership</i></li>
                                                        <li><i><strong>AgExt. 301:</strong> Extension Communication and Group Approach</i></li>
                                                        <li><i><strong>AgExt. 222:</strong> Extension Teaching Methods and Aids</i></li>
                                                        <li><i><strong>AgExt. 302:</strong> Data collection, Processing and Report Writing</i></li>
                                                        <li><i>Agricultural Extension Education, I, II & III</i></li>
													</p>
												</>
											}
											secondaryTypographyProps={{ fontSize: "16px", textAlign: "justify" }}
                                            primaryTypographyProps={{ color: "black" }}
										/>
									</ListItem>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-socials">
									<Socials />
								</div>

								{/* Widgets Section Start */}
								<Timeline
									dataSource={{
										sourceType: 'profile',
										screenName: 'ataharul'
									}}
									options={{
										height: 400
									}}
								/>

								<br /><Divider /><br />

								<iframe
									src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUofGuelphOAC&tabs=timeline&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
									title="uoguelph-facebook" width="340" height="400" style={{ border: 'none', overflow: 'hidden' }} frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
								></iframe>
								{/* Widgets Section End */}

							</div>

						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
