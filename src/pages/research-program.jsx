import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import { Timeline } from "react-twitter-widgets";
import { ListItem, ListItemText, Divider } from "@mui/material";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
								{/* <div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div> */}

								<div className="title about-title">
									Research Program
								</div>
								<div className="subtitle about-subtitle">
									<ListItem>
										<ListItemText
											primary="Participatory, Digital and Data-Driven Capacity Development for Agri-food Communities"
											secondary="How can we enrich our lives? There is probably no single answer to this visionary question. However, new ideas and knowledge help stimulate sustainable changes for improving life. To contribute to this vision statement, ‘business as usual’ is not a palatable option. We should call for action. As a researcher, I ask myself what I can contribute to improving the livelihoods of communities in Canada and internationally. It is about provoking processes of learning that develop our competencies (turning our knowledge into innovation) for solving societal, economic, political, and environmental challenges in a given context of living. I consider research a means to explore mechanisms for bringing about positive change in society. The specific goal of my research is to advance the understanding and prediction of processes, mechanisms, and conditions that work for improving the livelihoods of land users in complex, remote, and resource-poor contexts. In my research, I follow mixed-method strategies that include surveys, case studies, action research, and online data mining. My research program draws on the following three interrelated windows of enquiry."
											primaryTypographyProps={{ color: 'black', marginBottom: '10px' }}
											secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
										/>
									</ListItem>

									<ListItem>
										<ListItemText
											primary="Capacity development for agri-food system and rural development"
											secondary={
												<p>
													I approach 'capacity' and 'development' from the socio-technical, policy, and people-focused
													perspectives that leverage beneficial changes at local, regional, and global scales. In this
													window, I focus on the complex, non-linear, and dynamic nature of the livelihood systems of
													people who directly or indirectly depend on natural resources. Some system dynamics lead
													people into deeper poverty and deprivation, while others guide people into a state of improved
													wellbeing. I am interested in analyzing those dynamics that help natural resource users
													sustain lives and livelihoods. Understanding the guiding principles of 'development innovation'
													requires analysis of the interplay between technical, social, organizational, and ecological
													innovation and behavioural change in agriculture, soil, water, and forest management. I have
													received a grant from the Knowledge Translation and Transfer program of the Ontario Agri-food
													Alliance. The project will investigate the effectiveness of pluralistic agricultural advisory
													services systems in Ontario. One of my notable contributions is the development of a common
													<a
														href="http://www.fao.org/in-action/tropical-agriculture-platform/commonframework/en/"
														alt="framework for capacity" target="_blank" rel="noreferrer"
													> framework for Capacity Development in support of Agricultural Innovation Systems in the tropics. </a>
												</p>
											}
											primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
											secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
										/>
									</ListItem>

									<ListItem>
										<ListItemText
											primary="Information and Communication Technology (ICT), social and collaborative media for rural and regional development"
											secondary={
												<>
													<p>
														Agri-food stakeholders are increasingly connected through information and communication technologies (ICTs) and
														use them to share their concerns and discuss agriculture-related issues. Connected through ICTs and digital tools,
														these various stakeholders are also forming and contributing to Communities of Practice (CoPs). Digital and
														ICT-mediated interactions create opportunities for informal learning and relationship-building among stakeholders.
														However, we have also witnessed that social and collaborative media are major propagators of misleading
														information. According to the World Economic Forum (2014), online misinformation is one of the top ten global
														issues affecting the world. A recent survey by Statistics Canada (2021) indicates that 96% of Canadians were
														exposed to online COVID 19 misinformation, and half of them shared the information without checking the accuracy
														of the information received. The World Health Organization coined the term 'infodemic' to highlight that people
														are increasingly exposed to large quantities of both accurate and misleading health information. Agriculture,
														especially when it comes to making sound and informed decisions about sustainable practices, such as soil, pest
														and water, is not an exception to the harmful consequences of misinformation. There is anecdotal evidence about
														how the misinformation gets circulated and how this affects the adoption of sustainable agricultural practices.
														By considering how agri-food CoPs generate shared values, meanings and identities, and how they deal with the
														complex landscape of online misinformation my research program frames capacity development and extension paradigms
														within a larger context of big data and informatics.
													</p>

													<p>
														The post-doctoral fellowship of the Social Science and Humanities Research Council of Canada (SSHRC) is an
														important breakthrough, which helped me to develop this priority research area about how agricultural and rural
														development stakeholders are using new media for enabling voice, sharing ideas, and encouraging innovation. In the
														new media and communication landscape, how are conventional information flows being reinvented in rural areas,
														especially among people dependent on agriculture? How are they using social and collaborative media to create
														shared meaning and identity? How does the participatory web facilitate relationships among organizations,
														individuals, and groups?
													</p>

													<p>
														To better understand this rapidly changing communication and information landscape and its effects on the
														agricultural industry in Canada and globally, we must understand the influential actors that help shape values and
														goals; at the same time, there is a growing need for agricultural CoPs to understand these tools and tactics—to
														address and manage misinformation. I have been awarded an SSHRC insight grant (2019) to investigate how members of
														agricultural communities of practices use social media to strengthen their relationships as well as manage
														misinformation. I published findings in the Journal of Rural and Community Development, Journal of Agricultural
														Education and extension, Journal of Agriculture and Food Information, and the peer-reviewed proceedings of the
														Technology and Emerging Media track of the Canadian Communication Association. I created several new research
														opportunities, which include two graduate projects (MSc) in collaboration with Wageningen University, securing a
														provincial grant to examine roles of social media in rural asset building in Ontario, securing two competitive
														internal grants of the University of the West Indies, and a regional project (Food and Agriculture Organization)
														on ICT capacity for building resilience to Climate Change in the Eastern Caribbean Fisheries Sector and recent
														SSHRC partnership grant (2021) with University of Alberta.
													</p>
												</>
											}
											primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
											secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
										/>
									</ListItem>

									<ListItem>
										<ListItemText
											primary="Participatory media (e.g., video) for community learning and development"
											secondary={
												<>
													<p>
														During my doctoral study (2007-2011), I was inspired to consider the participatory use of media for community
														learning and development. I investigated participatory video as means of learning and education for
														agricultural innovation (seed and pesticide) in Bangladesh. Following the action research methodology, I made
														several theoretical and practical contributions, such as exploring links between video-mediated learning and
														livelihood assets building of resource-poor farmer groups, and developing a model for video-mediated learning
														for farmers' capacity development. I am interested in examining how participatory media (e.g., participatory
														video and photovoice) enable discovering identity, making meaning, and messaging in an agricultural and rural
														development context. The results are presented in top-ranking interdisciplinary and development study journals,
														including the Journal of Sustainable Agriculture, International Journal of Agricultural Sustainability,
														Austrian Journal of Development Studies, and The Journal of Agricultural Education and Extension. I received
														the best article prize (Chowdhury et al., 2010) awarded by the editorial board of The Journal of Agricultural
														Education and Extension. Overall, the doctoral research is a scholarly work that provides insight into the
														application of participatory media in an array of community mobilization, advocacy, and education for
														sustainable agricultural and food systems development.
													</p>

													<p>
														Following the doctoral study, I extended my research (in collaboration with my advisor Michael Hauser) to apply the
														model in other topics of sustainable agriculture, such as soil and pest management in Bangladesh. The project
														developed the capacity of different stakeholders, such as farmer groups, grassroots community organizations,
														development professionals, and researchers for participatory media applications, and improved the livelihoods of 600
														smallholder men and women in Bangladesh. The project drew the attention of international stakeholders, such as the
														Climate Change, Agriculture and Food Security (CCAFS) program, which granted a project for developing the capacity
														of forest-dependent communities for soil-carbon sequestration in northeast Bangladesh.
													</p>
												</>
											}
											primaryTypographyProps={{ color: 'black', fontSize: "14px" }}
											secondaryTypographyProps={{ fontSize: '14px', textAlign: 'justify' }}
										/>
									</ListItem>
								</div>
							</div>

							<div className="about-left-side">
								{/* <div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div> */}

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
