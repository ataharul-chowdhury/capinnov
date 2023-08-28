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
                                    Global Network Forum
								</div>
								<div className="subtitle about-subtitle">
									<ListItem>
										<ListItemText
											primary={
												<>
													<p>
                                                        Global Networks Forum on Communication for Agriculture, Rural Development and Environment
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
												<Tab className="tab-headers" label="Webinar Series" {...a11yProps(1)} wrapped />
												<Tab className="tab-headers" label="Partnership Network" {...a11yProps(2)} wrapped />
												<Tab className="tab-headers" label="Reports & Publication" {...a11yProps(3)} wrapped />
											</Tabs>

										</Box>

                                        {/* This is where we define the Tabs and their contents */}
										<CustomTabPanel className="tab-panels" value={value} index={0} >
											<ListItem>
                                                <ListItemText 
                                                    secondary={
                                                        <>
                                                            <p>
																What roles does communication play for development and social change in the Sustainable Development Goals
																(SDG) era? Given the revolution of information and communication technologies (ICTs), and new and
																collaborative media, what are opportunities and risks in enabling the voice of those most affected by
																development issues? How do stakeholders, especially media and journalism institutions, operate in this new
																reality of mediated communication for development and social change? How can we frame participation in
																response to emerging challenges related to equity and social norms, in addition to the development agenda
																setting process? These are fundamental questions to answer to leverage the potential of communication and
																sustain vibrant communities across different regions. Recent years have witnessed rapid changes in local,
																national, regional, and global development priorities in response to contemporary and emerging
																technological, social, political, and economical drivers. Researchers, and practitioners including
																governments, communities, and civil society organizations, are being challenged to reconsider their roles,
																revisit innovative means of communicating the formal mandates of the SDGs, and craft more compelling
																narratives and key messages that can move people and institutions to action and amplify citizens' voices.
																Since the early 2000s, the University of Guelph (through the School of Environmental Design and Rural
																Development) has been an active partner in many regional and global networks and initiatives in
																communication for development and social change. The Connection Grant initiative emanates from ongoing
																discussions within the member network for mobilizing existing yet fragmented knowledge on the emerging
																and innovative communication practices and services, with the aim of addressing the complex sustainability
																challenges in agriculture, rural development, and environment.
                                                            </p>
															<p>
																The initiative focuses on strengthening existing and building new networks across practitioners, non-profits,
																and researchers working in the communication for development and social change field. This initiative will
																generate knowledge sharing of the successful practices, create an invaluable network, and identify seminal
																questions and lessons learned in the context of achieving SDGs under five thematic areas. These areas include
																the following: (i) the founding networks and academic/practice convergence in communication for development
																and social change; (ii) discussion of the contemporary issues and approaches of the research “edge”; (iii)
																the changing role of media and journalism institutions in communication for development, social change, and
																deliberative democracy; (iv) reframing participatory processes in the digital age; and (v) social and
																collaborative media for agricultural and rural development.
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
                                                            GNF & IAMCR Webinar Part 1
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <p> 
                                                                <u><i> Speakers: </i></u> <br/>
                                                                Fred Campbell, Ryakuga <br/>
                                                            </p>
                                                            <p> 
                                                                <u><i> Discussant: </i></u> <br/>
                                                                Dr. Sarah Cardey, University of Reading <br/>
                                                                Md. Firoze Alam, University of Guelph <br/>
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
											<YoutubeEmbed embedId="ySgBHpRevQQ?si=Dcx7FaypyMqycMOx" />

											<ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Part C: CCA Roundtable Session
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <p> 
                                                                <u><i> Speakers: </i></u> <br/>
                                                                Dr. Katherin Reilly, Associate Professor, Simon Fraser University <br/>
                                                                Dr. Helen Hambly Odame, Professor, University of Guelph <br/>
                                                                Dr. Stella Tirol, University of Philippines, Los Banos <br/>
                                                            </p>
                                                            <p> 
                                                                Alatheia Araneta, University of Philippines, Los Banos <br/>
                                                                Dr. Ricardo Ramirez, Adjunct Faculty, University of Guelph <br/>
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
											<YoutubeEmbed embedId="3PWXgJ0QGlE?si=Inv3h1fFDP7NbFl1" />

                                            <ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Part B: Online tools and methods used for participation and community engagement processes
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <p> 
                                                                <u><i> Speakers: </i></u> <br/>
                                                                Dr. Gordon Gow, Professor, University of Alberta <br/>
                                                                Dr. Katherin Reilly, Associate Professor, Simon Fraser University <br/>
                                                                Dr. Habib Ali, Assistant Professor, University of Liberal Arts, Bangladesh <br/>
                                                            </p>
                                                            <p>
                                                                <u><i> Discussants: </i></u> <br/>
                                                                Dr. Helen Hambly Odame, Professor, University of Guelph <br/>
                                                                Md. Firoze Alam, Ph.D. Student, University of Guelph <br/>
                                                                Dr. Stella Tirol, University of Philippines, Los Banos <br/>
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
											<YoutubeEmbed embedId="gR75ONlAxAE?si=mDSZ3Yni_e7e-WgF" />

                                            <ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Part A: Participation Basics: What are Non-negotiables?
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <p> 
                                                                This is part one of the webinar series, "Rethinking Participation in the Digital Age of Communication for
                                                                Development and Social Change". This webinar explored the basic concepts and principles of participation
                                                                and then identify some of the “non-negotiable” components of participatory processes.
                                                            </p>
                                                            <p>
                                                                <u><i> Speaker and Facilitator: </i></u> <br/>
                                                                Dr. Ricardo Ramírez, International Development Consultant, & Adjunct Professor, University of Guelph <br/>
                                                            </p>
                                                            <p> Date: November, 10, 2020 </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
											<YoutubeEmbed embedId="gR75ONlAxAE?si=mDSZ3Yni_e7e-WgF" />
										</CustomTabPanel>

										<CustomTabPanel className="tab-panels" value={value} index={2} >
											<ListItem>
                                                <ListItemText
                                                    primary={
                                                        <p>
                                                            Partnership Network
                                                        </p>
                                                    }
                                                    secondary={
                                                        <>
                                                            <iframe 
																src = "https://www.google.com/maps/d/embed?mid=1sXLIbYVz_8hO5ptVmlNInpzHvFM&ehbc=2E312F" 
																width = "640" height = "480" title = "Advisory Service Network Map"
															></iframe>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black' }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
										</CustomTabPanel>

										<CustomTabPanel className="tab-panels" value={value} index={3} >

                                            <ListItem>
                                                <ListItemText
                                                    primary={ <p> Call for Proposals </p> }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                We are requesting contributions to the upcoming edited volume, “Digital Communication for Agricultural and Rural Development: Participatory Practices in a Post-Covid Age” to be published by the Taylors and Francis.
                                                                The volume will be co-edited by <a href="https://www.uoguelph.ca/sedrd/people/ataharul-chowdhury" target="_blank" rel="noreferrer">Dr. Ataharul Chowdhury</a>, 
                                                                University of Guelph, <a href="https://apps.ualberta.ca/directory/person/ggow" target="_blank" rel="noreferrer">Dr. Gordon Gow</a>, University of Alberta
                                                                and <a href="https://www.uoguelph.ca/sedrd/people/helen-hambly" target="_blank" rel="noreferrer">Dr. Helen Hambly Odame</a>, University of Guelph. We are seeking contributions from established and
                                                                emerging scholars and practitioners of communication for development and social change.
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemText
                                                    primary={ <p> Background </p> }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                Participation and participatory research and development processes are fundamental to communication for development (comdev or C4D)
                                                                and communication for social change (CfSC) scholarship. Over the past five decades there has been a variety of theoretical approaches,
                                                                practice-based studies and knowledge bases (e.g. Servaes, 2018; Waisbord, 2018; Melkote & Steeves, 2015; Manyozo, 2012a; Thomas, 2014;
                                                                Wilkins et al., 2014; Gumucio Dagron & Tufte, 2006; Gumucio Dagron, 2001) that highlight participation as an essential component of
                                                                inclusive development processes. Over the last decade, we have witnessed many good practices, principles and experience, especially
                                                                using various digital tools, such as video, radio, internet, collaborative and social media (see Servaes, 2018 and Waisbord, 2018) to
                                                                harness the benefit of mediated participation and raise the voice of marginalized groups and enable their choices in the development
                                                                projects.
                                                            </p>
                                                            <p>
                                                                The COVID 19 pandemic has revealed that digital technology and mediated participation are important and essential in managing C4D
                                                                projects. However, it has also underscored the various challenges associated with digital participatory practices. For example, the
                                                                rapid shift to exclusively online communications has presented difficulties for undertaking community engagement activities, leading
                                                                to further exclusion of marginalized groups, including households and communities with limited access to digital technology. As
                                                                remote communication increasingly displaced face to face contact during the COVID 19 pandemic, researchers and practitioners have been
                                                                forced to reconsider the very concept of participation. How has  community engagement within C4D and CfSC initiatives transformed, and
                                                                why does it matter?
                                                            </p>
                                                            <p>
                                                                This book aims to collect and present insights from scholars and practitioners around the world on the impact of COVID on
                                                                participatory communication and rural development practices. It will consider how the concept of participation has been transformed
                                                                by the realities of the pandemic, reflecting on essential principles and practical considerations. It will also look at techniques and
                                                                approaches adopted and adapted in response to the constraints imposed by lockdowns and the necessity of shifting C4D and CfSC
                                                                initiatives to exclusively remote interaction. The goal in gathering these insights is to consider what these lessons entail for the
                                                                future of participatory processes.
                                                            </p>
                                                            <p>
                                                                Chapters for this Edited Volume will be between 5000-7000 words and will be organized into the following broad areas
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "18px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemText
                                                    primary={ <p><i> Part1: Reflecting on the Participatory Paradigm in Rural Communication Studies </i></p> }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                In this part, we will include contributions that focus on historical and theoretical debate of participation rooted in the C4D and
                                                                CfSC paradigms. The section will also cover contributions that focus on conceptualizing participation in a digital setting,
                                                                particularly in rural areas.
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemText
                                                    primary={ <p><i> Part 2: Critical Perspectives on Digital Participation </i></p> }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                This section will include contributions that examine critical perspectives on digital participation in agriculture and rural
                                                                development as we enter a post-COVID era. The chapters will focus on contemporary and emerging challenges, for example social and
                                                                ethical issues related to deploying online platforms, partnership and civic participation for internet infrastructure, online
                                                                polarization and marginalization due to emerging threats of misinformation.
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemText
                                                    primary={ <p><i> Part 3: Practices, Experiences, Cases and Tools </i></p> }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                This part will include chapters that focus on experiences, cases and tools related to digital participation. Chapters will cover a
                                                                range of experiences related to the continuity of C4D and CfSC activities during COVID 19 disruptions. The chapter authors include
                                                                practitionerreflections on lessons learned as well as what we might expect for enduring changes to participatory practices as the
                                                                pandemic becomes an endemic, and beyond. 
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemText
                                                    primary={ <p> The following is a list of potential topic areas </p> }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                <li>
                                                                    Theoretical and Conceptual Discussions on Participatory research and development in agri-food, natural resource management and
                                                                    environmental communication, with a focus on implications for digitally medicated/remote communication.
                                                                </li> <br/>
                                                                <li>
                                                                    Critical perspectives/experiences/tools/methods related to use of digital media (e.g. social and collaborative media, internet
                                                                    tools and platforms etc.) and traditional media (e.g. radio, video)  for knowledge mobilization, agricultural extension and
                                                                    advisory services in areas of agri-food, nutritional and environmental changes and development.
                                                                </li><br/>
                                                                <li>
                                                                    Critical perspectives/experiences/tools/methods related to use of digital media (e.g. social media, internet etc.) and traditional
                                                                    media (e.g. radio, video)  for co-creation, co-design and public engagement in areas of agri-food, nutritional and environmental
                                                                    changes and development.
                                                                </li><br/>
                                                                <li>
                                                                    Critical perspectives/experiences/tools related to citizen science, crowdsourcing, and open data initiatives in in areas of
                                                                    agri-food, nutritional and environmental changes and development.
                                                                </li><br/>
                                                                <li>
                                                                    Digitally mediated/Remote communication practices that address equity & inclusion and anti racism, Indigenous issues, labour, etc.
                                                                    in areas of agri-food, nutritional and environmental changes and development.
                                                                </li><br/>
                                                                <li> Suggest an idea! </li>
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>

                                            <ListItem>
                                                <ListItemText
                                                    primary={ <p> Submission Instructions </p> }
                                                    secondary={
                                                        <>
                                                            <p>
                                                                Please send a 250 word abstract proposal by December 24th, 2021 to Ataharul
                                                                Chowdhury <a href="mailto:ataharul.chowdhury@uoguelph.ca" target="_blank" rel="noreferrer">ataharul.chowdhury@uoguelph.ca</a>
                                                            </p>
                                                            <p>
                                                                In the subject line of your email, include, <br/>
                                                                {'>'} <i> Digital Communication for Agricultural and Rural Development! </i>
                                                            </p>
                                                            <p>
                                                                In the body of your email include, <br/>
                                                                {'>'} <i> Chapter Title </i> <br/>
                                                                {'>'} <i> Section you are submitting to </i> <br/>
                                                            </p>
                                                            <p>
                                                                <strong>Part 1:</strong> Reflecting on the Participatory Paradigm in C4D <br/>
                                                                <strong>Part 2:</strong> Critical Perspectives on Digital Participation; or <br/>
                                                                <strong>Part 3:</strong> Practices, Experiences, Cases and Tools. <br/>

                                                                <br/><hr/>

                                                                Name of author(s), title(s), institution(s), & email addresses.
                                                                <li>We will send out confirmations by January 30, 2022</li>
                                                                <li>First draft of the chapter is expected by June 19, 2022.</li>
                                                            </p>
                                                        </>
                                                    }
                                                    primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
                                                    secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
                                                />
                                            </ListItem>
                                        
                                        </CustomTabPanel>
									</Box>
									
									<ListItem>
										<ListItemText
											primary="Funded By"
											secondary={
												<img src = "./capinnov/gnf-fund.png" alt = "gnf-fund" height={125}/>
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
