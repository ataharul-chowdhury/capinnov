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
                                    Teaching Philosophy
								</div>
								<div className="subtitle about-subtitle">
									<ListItem>
										<ListItemText
											secondary={
												<>
													<p>
                                                        The challenges of sustainable development in the 21st century are multidimensional, dynamic, and related
                                                        to contested social, political and economic claims; thus, university education should focus on developing
                                                        competences of students so that they can perform better in a changing environment and stimulate beneficial
                                                        change. The process of competence development must be grounded in the real world and must aim at
                                                        transforming broader character elements, such as cognitive, technical, integrative, contextual, relational,
                                                        affective/moral, and habits of the mind. The development of these character traits will enable them to
                                                        address current and future challenges in agriculture, food, environment, health, and education.
													</p>
                                                    <p>
                                                        I am deeply influenced by a learner-centred approach in education. The theoretical underpinnings of the
                                                        approach are based on 'experiential learning'. According to this theory, knowledge is created through
                                                        transformation of experience. In general, learning is a four-stage continuous and iterative process (see
                                                        Figure 1). The stages proceed in an inductive way from experience through reflection and
                                                        (re)conceptualization / generalization to action. The education philosophy offers students an opportunity
                                                        to draw a conclusion based on their experience rather than insight formulated by others (e.g., instructors,
                                                        trainers, and facilitators) based on experiences with which students may not identify.Experience and
                                                        learning are integral parts of the experiential learning/education settings. The stage starts when
                                                        participants are engaged in 'sharing knowledge' and 'doing' something. As a teacher, I engage students in a
                                                        range of activities, such as listening to a lecture, engaging with content in the form of a case study,
                                                        role play, simulations, games, videos, practising a skill, or completing an exercise. I often choose
                                                        topics/cases that may involve disorientation, surprise, or recognition of ignorance. The cases help
                                                        students reconsider their existing knowledge and experience (critical thinking). The nature of the issues
                                                        provokes emotion, interest, controversy, and expression of concern for social justice, democracy, health,
                                                        and empowerment. The cases/examples are selected based on their link to transformation of local and global
                                                        issues of agriculture, food, ecosystem, health, poverty, pollution, and food security. In the reflection
                                                        stage, I encourage students to discuss the activity undertaken during the experience stage. I follow both
                                                        structured and semi-structured forms of sharing reactions of students with other members of the group. This
                                                        takes place through individual assignment, discussion in small groups, or in plenary. I try to elicit both
                                                        intellectual and attitudinal reactions to these activities.         
                                                    </p> <br/>
                                                    <ListItemText
                                                        secondary={
                                                            <img src = "./capinnov/teaching-philosophy.jpg" alt = "teaching-philosophy" width="100%" />
                                                        }
                                                    /> <br/>
                                                    <p>
                                                        In the generalization stage, students are encouraged to draw conclusions and (re)conceptualize opinions
                                                        and ideas stimulated during the first two phases. Students are encouraged to think critically to draw
                                                        conclusions that might apply generally or theoretically in a real-life situation. I help students by
                                                        clarifying concepts, principles, and steps. I provoke them by asking questions: "What are the implications
                                                        (cultural, social, organizational, economical, and environmental) of the case for sustainable development ?",
                                                        "How would you interpret the case in relation to your personal goals and interests ?", or "How could things
                                                        be organized differently ?"
                                                    </p>
                                                    <p>
                                                        In the action stage, students are encouraged to incorporate what they have learned during previous stages
                                                        through assignments and other evaluation activities. I follow several techniques, which include reviewing
                                                        each other's assignments, formulating ideas for research or further study, sharing assignments with the class,
                                                        and identifying additional learning needs. Overall, I try to facilitate learning through a continuous feedback
                                                        (through dialogue and interaction) between thinking and action.
                                                    </p>
												</>
											}
											secondaryTypographyProps={{ fontSize: "14px", textAlign: "justify" }}
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
