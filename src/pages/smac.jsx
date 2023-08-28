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
    Chip,
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
                                    Social Media for Agricultural CoPs
								</div>
								<div className="subtitle about-subtitle">
									<ListItem>
										<ListItemText
											primary={
												<>
													<p>
                                                        Social Media for Strengthening Agricultural Communities of Practices (CoPs) in an Era of Misinformation
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
												<Tab className="tab-headers" label="Project Vision" {...a11yProps(1)} wrapped />
												<Tab className="tab-headers" label="Publication & Media" {...a11yProps(1)} wrapped />
											</Tabs>

										</Box>

                                        {/* This is where we define the Tabs and their contents */}
										<CustomTabPanel className="tab-panels" value={value} index={0} >
											<ListItem>
                                                <ListItemText 
                                                    secondary={
                                                        <>
                                                            <p>
                                                                With internet penetration rates growing in both rural and urban areas in Canada, individuals and organizations
                                                                are increasingly turning to social media to share information and form online communities. Stakeholders, such
                                                                as producers, input dealers, advisory services, producer organizations, and non-profits are also increasingly
                                                                using social media to share their concerns, discuss agriculture-related issues and deepen their knowledge and
                                                                expertise. Connected through social media, these various stakeholders are also forming so-called Communities
                                                                of Practices (CoPs), which are at the core of this proposal.
                                                            </p>
                                                            <p>
                                                                While social media and CoPs provide numerous benefits to all involved, there are also many risks due to the
                                                                alarming rise in the circulation of misinformation across various social media platforms. Misleading and
                                                                contradictory information related to food, produce, technology and policies quickly circulates among producers
                                                                as well as other stakeholders. The spread of misinformation may, and often does, lead to confusion, fear and
                                                                conflicts, and this creates barriers for making informed decisions by farmers, industry partners and policy
                                                                makers in Ontario.
                                                            </p>
                                                            <p>
                                                                By applying a mixed-method approach, the proposed initiative seeks to answer the central question of how
                                                                agricultural CoPs are using social media for learning and relationship-building, while dealing with
                                                                misinformation related to sensitive topics, such as animal welfare, genetically modified crops, and
                                                                sustainable agriculture. First, relevant CoPs on Facebook and Twitter - two popular social media platforms
                                                                among agricultural professionals, will be identified. Social network analysis, as well as a manual and
                                                                automated content analysis will be used to gain insights into the inner workings of these online communities
                                                                and determine which topics are discussed publicly. To complement and validate our observations, key
                                                                informants from each CoPs will be conducted. The initiative will contribute to the scholarship of 'digital'
                                                                and 'data driven' agricultural projects by examining the use of social media as a means to strengthen
                                                                agricultural CoPs and combat misinformation related to this sector. The proposed initiative is an important
                                                                endeavor because it will contribute to the contemporary praxis of social media for supporting collaboration,
                                                                knowledge mobilization, and social processes in the agriculture and rural sector in Ontario and throughout
                                                                Canada.
                                                            </p>
                                                        </>
                                                    }
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
										</CustomTabPanel>

										<CustomTabPanel className="tab-panels" value={value} index={1} >
                                            <ListItem>
                                                <ListItemText secondary="Coming Soon..." />
                                            </ListItem>
										</CustomTabPanel>

                                        <CustomTabPanel className="tab-panels" value={value} index={2} >
                                            <ListItem>
                                                <ListItemText secondary="Coming Soon..." />
                                            </ListItem>
										</CustomTabPanel>

									</Box>
									
									<ListItem>
										<ListItemText
											primary="Funded By"
											secondary={
												<img src = "./capinnov/smac-fund.png" alt = "gnf-fund" height={125}/>
											}
											primaryTypographyProps={{ fontSize: "18px", color: "black", marginBottom: "10px" }}
										/>
									</ListItem>

                                    <ListItem>
										<ListItemText
											primary="In Partnership With"
											secondary={
												<img src = "./capinnov/smac-partner.jpg" alt = "asio-fund" height={125}/>
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
