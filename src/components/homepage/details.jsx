import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import QuiltedImageList from "./research";

import "./styles/details.css";
import Works from "./works";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

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

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
                    variant="scrollable"
				>
					<Tab className="tab-headers" label="Biography" {...a11yProps(0)} wrapped />
					<Tab className="tab-headers" label="Education" {...a11yProps(1)} wrapped />
					<Tab className="tab-headers" label="Employment Experience" {...a11yProps(2)} wrapped />
                    <Tab className="tab-headers" label="Awards & Recognition" {...a11yProps(3)} wrapped />
                    <Tab className="tab-headers" label="Research Affiliations" {...a11yProps(4)} wrapped />
                    <Tab className="tab-headers" label="Professional Affiliations" {...a11yProps(5)} wrapped />
				</Tabs>
			</Box>
			<CustomTabPanel className="tab-panels" value={value} index={0}>
                <Box sx={{ fontSize: '0.8rem', color: 'grey', textAlign: 'left' }}>
                    I am an educator, a social scientist, and a believer in sustainable change. I grew up on a family farm, but I have had the 
                    opportunity to live, study and work in different countries. I am currently an Assistant Professor of Capacity Development 
                    and Extension at the School of Environmental Design and Rural Development, University of Guelph, Ontario, Canada. My expertise 
                    and academic background intersect in the sub-fields of agricultural science, extension education, communication and innovation 
                    studies, and rural and regional development. I completed my doctoral studies at the University of Natural Resources and Life 
                    Sciences (BOKU), Vienna, Austria. My doctoral research was in the area of sustainable agricultural development and focused on 
                    video-mediated learning to support agricultural innovation in Bangladesh. I have held research and faculty positions at the 
                    University of the West Indies, Trinidad & Tobago; University of Natural Resources and Life Sciences; the Food and Agriculture 
                    Organization (FAO) of the United Nations; and Bangladesh Agricultural University.
                </Box>
                <br/>
                <Box sx={{ fontSize: '0.8rem', color: 'grey', textAlign: 'left' }}>
                    I have developed a passionate interest in food, agriculture and the environment, and the roles these play in the well-being of 
                    communities. To help build more sustainable agriculture and rural development in remote and resource-poor communities around the 
                    world, I have collaborated with many leading national, regional and international partners. I am the current secretary of the 
                    Association for International Agricultural and Extension Education, and one of my notable global contributions is the 
                    capacity-development framework for strengthening agricultural innovation that has been implemented by the FAO, European Union 
                    and Agrinatura in countries in Africa (Angola, Burkina Faso, and Ethiopia), Asia (Bangladesh, Laos) and Central America 
                    (Guatemala, Honduras). The originality and novelty of my research approach have directly contributed to my being awarded the 
                    Social Sciences and Humanities Research Council of Canada (SSHRC) post-doctoral scholarship and, subsequently, three SSHRC 
                    grants.
                </Box>
                <br/>
                <Box sx={{ fontSize: '0.8rem', color: 'grey', textAlign: 'left' }}>
                    I have been sought out as an advisor, keynote speaker, and reviewer by institutions such as Wageningen University, The 
                    University of the West Indies, Australian National University, Tamil Nadu Agricultural University, University of the Philippines, 
                    the Social Science and Humanities Research Council of Canada, Qatar Research Foundation, and the Global Forum for Rural Advisory 
                    Services. At the University of Guelph, I have taught Research Methods, Community Engagement, Project Management, Technology 
                    Stewardship, Development in Practice, International Communication, and Interpersonal Communication.
                </Box>
			</CustomTabPanel>
			<CustomTabPanel className="tab-panels" value={value} index={1}>
                <Box sx={{ fontSize: '0.8rem', color: 'grey', textAlign: 'left' }}>
                    <strong><u>
                        Postgraduate Certificate in University Teaching and Learning (2018)
                    </u></strong>, The University of the West Indies, St. Augustine.<br/><br/>
                    
                    <strong><u>
                        Ph.D. (2011)
                    </u></strong>, University of Natural Resources and Life Science, Austria, Vienna<br/><br/>
                    
                    <strong><u>
                        Masters of Science (MSc) (2007)
                    </u></strong>, in Management of Agro-ecological Knowledge and Social Change, Wageningen University and Research Centre, 
                    Wageningen, The Netherlands<br/><br/>
                    
                    <strong><u>
                        Master of Science in Agricultural Extension Education (2003)
                    </u></strong>, Bangladesh Agricultural University, Mymensingh, Bangladesh<br/><br/>
                    
                    <strong><u>
                        Bachelor of Science in Agriculture (2002),
                    </u></strong> Bangladesh Agricultural University, Mymensingh, Bangladesh
                </Box>
			</CustomTabPanel>
			<CustomTabPanel className="tab-panels" value={value} index={2}>
                <Works />
			</CustomTabPanel>
            <CustomTabPanel className="tab-panels" value={value} index={3}>
                <Box sx={{ fontSize: '0.8rem', color: 'grey', textAlign: 'left' }}>
                    
                    <h3>Awards</h3>
                    <ListItem>
                        <ListItemText 
                            primary="🏆 Outstanding Early Achievement Award, 2020"
                            primaryTypographyProps={{ fontSize: '18px' }}
                            secondary={
                                <a 
                                    href="https://www.aiaee.org/" target="_blank" 
                                    rel="noreferrer" style={{ color: '#1976d2' }}
                                >
                                    by the Association for International Agricultural and Extension Education
                                </a>
                            }
                            secondaryTypographyProps={{ fontSize: '15px' }}
                        ></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText 
                            primary="🏆 Best Paper Award, 2010"
                            primaryTypographyProps={{ fontSize: '18px' }}
                            secondary={
                                <a 
                                    href="https://www.aiaee.org/" target="_blank" 
                                    rel="noreferrer" style={{ color: '#1976d2' }}
                                >
                                    by the editorial board of the Journal of Agricultural Education and Extension, 
                                    Wageningen University, Taylor & Francis.
                                </a>
                            }
                            secondaryTypographyProps={{ fontSize: '15px' }}
                        ></ListItemText>
                    </ListItem><br/>
                    
                    <h3>Scholarships</h3>
                    <ListItem>
                        <ListItemText 
                            primary="🏅 Post doctoral fellowship (2012-2014) of the Social Science and Humanities Research Council of Canada (SSHRC)."
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                            secondary="
                                The Social Sciences and Humanities Research Council (SSHRC) is the federal research funding agency that 
                                promotes and supports research and training in the humanities and social sciences.
                            "
                            secondaryTypographyProps={{ fontSize: '13px' }}
                        ></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                            primary="🏅 Mitacs Elevate strategic post-doc fellowship, 2011-12 (Declined)."
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                            secondary={
                                <Box>
                                    Mitacs Elevate is a postdoctoral fellowship with an exclusive professional development curriculum. Fellows address complex challenges through:
                                    <li>A one or two-year research project with a partner organization in need of high-level expertise</li>
                                    <li>A professional development curriculum that prepares Elevate fellows for success as leaders in research and industry</li>
                                </Box>
                            }
                            secondaryTypographyProps={{ fontSize: '13px' }}
                        ></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                            primary="🏅 Scholarship by the Royal Holloway University of London"
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                            secondary={
                                <Box>
                                    Scholarship by the Royal Holloway University of London, to attend the International Conference on Information and 
                                    Communication Technologies for Development, London, 13-16 September, 2010.
                                </Box>
                            }
                            secondaryTypographyProps={{ fontSize: '13px' }}
                        ></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                            primary="🏅 Student Reporter Grant"
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                            secondary={
                                <Box>
                                    Student Reporter Grant, by the North-South Centre, ETH Zurich to cover the Tropentag, Zurich, September 14-16, 2010
                                </Box>
                            }
                            secondaryTypographyProps={{ fontSize: '13px' }}
                        ></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                            primary="🏅 Scholarship of the Netherlands Fellowship Programme (NFP)"
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                            secondary={
                                <Box>
                                    Scholarship of the Netherlands Fellowship Programme (NFP), Netherlands Organization for International Cooperation 
                                    in Higher Education to attend the refresher training course, 'Development of sustainable potato supply chains to 
                                    support rural development in Asia', 30 Nov-11 Dec, 2009, Hanoi
                                </Box>
                            }
                            secondaryTypographyProps={{ fontSize: '13px' }}
                        ></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                            primary="🏅 North South Dialogue Scholarship"
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                            secondary={
                                <Box>
                                    North South Dialogue scholarship, 2007-2011 (Now APPEAR), The Austrian Agency for International Cooperation in 
                                    Higher Education. <br/><br/>
                                    
                                    <u>North-South-Dialogue Scholarship Programme:</u> The North-South-Dialogue Scholarship Program 
                                    strengthens personal and institutional capacity building in developing countries in the areas of higher education, 
                                    science and research and thus contributes to the reduction of poverty.
                                </Box>
                            }
                            secondaryTypographyProps={{ fontSize: '13px' }}
                        ></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText 
                            primary="🏅 Netherlands Fellowship Programme"
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                            secondary={
                                <Box>
                                    Netherlands Fellowship Programme (2005-2007), Netherlands Organization for International Cooperation in
                                    Higher Education. Netherlands Fellowship Programmes (NFP) provides scholarships to professionals working 
                                    in a developing country, to help reduce the shortage of skilled workers.
                                </Box>
                            }
                            secondaryTypographyProps={{ fontSize: '13px' }}
                        ></ListItemText>
                    </ListItem>
                </Box>
			</CustomTabPanel>
            <CustomTabPanel className="tab-panels" value={value} index={4}>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/OMAFRA-LOGO.jpg" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="http://www.omafra.gov.on.ca/english/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                Ministry of Agriculture, Food and Rural Affairs
                            </a>
                        }
                        secondary={
                            <Box>
                                The Ministry of Agriculture, Food and Rural Affairs is an Ontario government ministry responsible for the food, 
                                agriculture and rural sectors of the Canadian province of Ontario. The Minister is currently Lisa Thompson.
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/SSHRCLogo.png" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://www.sshrc-crsh.gc.ca/home-accueil-eng.aspx" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                Social Science and Humanities Research Council of Canada (SSHRC), Canada
                            </a>
                        }
                        secondary={
                            <Box>
                                The Social Sciences and Humanities Research Council (SSHRC) is the federal research funding agency that promotes
                                and supports research and training in the humanities and social sciences.
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/cgiar.jpg" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://www.cgiar.org/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                CGIAR
                            </a>
                        }
                        secondary={
                            <Box>
                                CGIAR strives for global and regional impact by organizing its research along three Action Areas in which
                                accelerated innovation is required to create sustainable and resilient food, land, and water systems and to meet 
                                SDG targets.
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/fao.png" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://www.fao.org/home/en/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                Food and Agriculture Organization
                            </a>
                        }
                        secondary={
                            <Box>
                                The Food and Agriculture Organization (FAO) is a specialized agency of the United Nations that leads international
                                efforts to defeat hunger. Their goal is to achieve food security for all and make sure that people have regular
                                access to enough high-quality food to lead active, healthy lives. 
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/west-indies.png" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://uwi.edu/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                University of West Indies
                            </a>
                        }
                        secondary={
                            <Box>
                                Starting as a university college of London in Jamaica with 33 medical students in 1948, The UWI has evolved into a
                                modern, future-driven, activist, top-ranked academy with over 50,000 students. Their mission to advance learning,
                                create knowledge and foster innovation for the positive transformation of the Caribbean is centred on producing
                                critical thinkers and leaders who serve the needs of the 21st century society.
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>
            </CustomTabPanel>
            <CustomTabPanel className="tab-panels" value={value} index={5}>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/aiaee.jpg" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://www.aiaee.org/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                Association for International Agricultural Education and Extension
                            </a>
                        }
                        secondary={
                            <Box>
                                The Association for International Agricultural and Extension Education (AIAEE), established in 1984, is a
                                professional organization for agricultural and extension educators who share a common goal of strengthening
                                agricultural and extension education programs and institutions worldwide. 
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/iamcr.png" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://iamcr.org/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                International Association of Media and Communication Research
                            </a>
                        }
                        secondary={
                            <Box>
                                IAMCR aims to support and develop media and communication research throughout the world. It particularly
                                encourages the participation of emerging scholars, women and those from economically disadvantaged regions.
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/acc-cca.png" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://acc-cca.ca/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                Candian Communication Association
                            </a>
                        }
                        secondary={
                            <Box>
                                Founded in 1980, the CCA is a national, bilingual organization that brings together teachers, researchers, and
                                professionals from the public and private sectors to promote the investigation of communication, media and 
                                technology-relevant issues in Canada, and around the world. CCA members conduct, publish and publicize research
                                in many topic areas.
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/esac.jpeg" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://www.esac.ca/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                Environmental Studies Association of Canada
                            </a>
                        }
                        secondary={
                            <Box>
                                Founded in 1993, ESAC is a non-profit, federally incorporated, bilingual organization. Our members are located across
                                Canada and beyond, and hold roles within education, government, private, and non-profit sectors. ESAC members
                                research, teach, work, and advocate within a multidisciplinary field that investigates, educates, guides, supports,
                                and acts upon human-environment relationships. 
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

                <ListItem>
                    <ListItemIcon sx={{ height: 'auto', padding: 20 + 'px' }}>
                        <img width = '120px' src="./capinnov/fcrr-crrf.png" alt="" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <a 
                                href="https://crrf.ca/" target="_blank" 
                                rel="noreferrer" sx={{ color: '#1976d2'}}
                            >
                                Canadian Rural Revitalization Foundation
                            </a>
                        }
                        secondary={
                            <Box>
                                The Canadian Rural Revitalization Foundation (CRRF) was established in 1989 to contribute to the revitalization and
                                sustainability of rural Canada through collaborative research for rural leaders in the community, private sector,
                                and in all levels of government. CRRF works to create credible insights and to improve our understanding of issues
                                and opportunities that are of common interest to rural residents across Canada. 
                            </Box>
                        }
                        primaryTypographyProps={{ fontSize: '15px', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ fontSize: '13px' }}
                    />
                </ListItem>

            </CustomTabPanel>
		</Box>
	);
}
