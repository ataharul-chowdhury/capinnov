import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import {
	ListItem,
	ListItemText,
	Typography,
	Box,
	Tab,
	Tabs,
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
									Advisory Service in Ontario
								</div>
								<div className="subtitle about-subtitle">
									<ListItem>
										<ListItemText
											primary={
												<>
													<p>
														Improving the effectiveness of advisory services for facilitating information sharing, accessibility and adoption of
														sustainable farm management practices in Ontario
													</p>
												</>
											}
											primaryTypographyProps={{ fontSize: "18px", color: "black" }}
										/>
									</ListItem>

									<Box sx={{ width: "100%" }}>

										<Box sx={{ borderBottom: 1, borderColor: "divider" }} >

                                            {/* This it the mains tab panel with the scrollable variant */}
											<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" >
												<Tab className="tab-headers" label="Overview" {...a11yProps(0)} wrapped />
												<Tab className="tab-headers" label="Forum Discussion" {...a11yProps(1)} wrapped />
												<Tab className="tab-headers" label="Advisory Service Network Map" {...a11yProps(2)} wrapped />
											</Tabs>

										</Box>

                                        {/* This is where we define the Tabs and their contents */}
										<CustomTabPanel className="tab-panels" value={value} index={0} >
											<ListItem>
                                                <ListItemText 
                                                    secondary={
                                                        <>
                                                            <p>
                                                                Ontario farmers have been facing challenges of receiving quality and needs-based services due to a lack of
                                                                coordination and functional networks among agricultural advisory service providers and farmers. Therefore,
                                                                it is necessary to understand how the current pluralistic advisory system in Ontario facilitates partnerships
                                                                among relevant actors to provide quality service, and thus drive adoption by the target sectors and
                                                                individuals in a timely manner. The present research aims to map out existing advisory service providers,
                                                                their networks and partnership mechanisms, assess organizational capacity, quality of service and the
                                                                effectiveness of the methods. This will be done by implementing stakeholder analysis, forums, surveys, and
                                                                workshops in addition to drawing on the 'best-fit' approach toward assessing pluralistic agricultural
                                                                advisory services. The research aims to generate enhanced understanding of the effectiveness of current
                                                                advisory services for the adoption of sustainable management practices. This has included development of a
                                                                strategy to improve pluralistic advisory service networks in Ontario using five main objectives, such as
                                                                assessment of the organizational capacity of service providers to achieve their service goals as well as the
                                                                quality and scope of services provided by different service providers.
                                                            </p>
                                                        </>
                                                    }
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
										</CustomTabPanel>

										<CustomTabPanel className="tab-panels" value={value} index={1} >
											<ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Forum Discussion Series "What's holding up advancing agricultural advisory services?"
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                Ontario farmers have been facing challenges of receiving quality and needs-based services due to a lack of
                                                                coordination and functional networks among agricultural advisory service providers and farmers. Therefore,
                                                                it is necessary to understand how the current pluralistic advisory system in Ontario facilitates partnerships
                                                                among relevant actors to provide quality service, and thus drive adoption by the target sectors and
                                                                individuals in a timely manner. The present research aims to map out existing advisory service providers,
                                                                their networks and partnership mechanisms, assess organizational capacity, quality of service and the
                                                                effectiveness of the methods. This will be done by implementing stakeholder analysis, forums, surveys, and
                                                                workshops in addition to drawing on the 'best-fit' approach toward assessing pluralistic agricultural
                                                                advisory services. The research aims to generate enhanced understanding of the effectiveness of current
                                                                advisory services for the adoption of sustainable management practices. This has included development of a
                                                                strategy to improve pluralistic advisory service networks in Ontario using five main objectives, such as
                                                                assessment of the organizational capacity of service providers to achieve their service goals as well as the
                                                                quality and scope of services provided by different service providers.
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Part One
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <p> Date: April 9, 2021 </p>
                                                            <p> <i> Speakers and Discussants </i> </p>
                                                            <p> 
                                                                Prof Dr. Klerkx Laurens, Wageningen University, The Netherlands <br/>
                                                                Prof. Dr. Andrea Knierim, University of Hohenheim, Germany <br/>
                                                                Dr Steve Roche, Director, ACER Consulting, Ontario, Canada <br/>
                                                                Mel Luymes, Co-founder, Ontario Soil Network, Ontario Canada <br/>
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
											<YoutubeEmbed embedId="p6esOBq3mLc?si=WH8iSg-3tVQZQgNQ" />

											<ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Part Two
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <p> Date: October 15, 2021 </p>
                                                            <p> <i> Speakers and Discussants </i> </p>
                                                            <p> 
																Dr. Kristin Davis, International Food Policy Research Institute, Washington D.C. <br/>
                                                                Dr. David Nielson, North American Agricultural Advisory Service Network <br/>
                                                                Ian McDonald, Ontario Ministry of Agriculture Food and Rural Affairs <br/>
                                                                Mike Morris, Livestock Research Innovation Corporation, Ontario Canada <br/>
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
											<YoutubeEmbed embedId="LmNfo87DZ38?si=AmHXESzGPxU3K3MK" />
										</CustomTabPanel>

										<CustomTabPanel className="tab-panels" value={value} index={2} >
											<ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Advisory Service Network Map
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <iframe 
																src = "https://www.google.com/maps/d/embed?mid=10h8G0ZDyFTu-jmrwLhsP7k-jle_Iqn3G&ehbc=2E312F" 
																width = "640" height = "480" title = "Advisory Service Network Map"
															></iframe>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black' }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
										</CustomTabPanel>
									</Box>
									
									<ListItem>
										<ListItemText
											primary="Funded By"
											secondary={
												<img src = "./asio-fund.png" alt = "asio-fund" height={125}/>
											}
											primaryTypographyProps={{ fontSize: "18px", color: "black", marginBottom: "10px" }}
										/>
									</ListItem>

									<ListItem>
										<ListItemText
											primary="In Partnership With"
											secondary={
												<img src = "./asio-partner.png" alt = "asio-fund" height={125}/>
											}
											primaryTypographyProps={{ fontSize: "18px", color: "black", marginBottom: "10px" }}
										/>
									</ListItem>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-socials">
									<Socials />
								</div>
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
