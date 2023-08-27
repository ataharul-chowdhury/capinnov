import React from "react";
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import {
	Forest,
	Biotech,
	WorkHistory,
	SettingsVoice,
	ContactSupport,
} from "@mui/icons-material";
import { MicOutlined, LibraryBooks } from "@mui/icons-material";

import Card from "../common/card";

import "./styles/works.css";
import { Box } from "@mui/material";

const Works = () => {
	return (
		<Box className="works">
			<Card
				icon={faTimeline}
				title="Employment Experience"
				body={
					<Box className="works-body">
						<Box className="work">
							<Box className="work-header">
								<LibraryBooks sx={{ color: "#c3c3c3" }} />
								<Box className="work-title">
									Assistant Professor (Since 2018)
								</Box>
							</Box>
							<Box className="work-subtitle">
								School of Environmental Design and Rural
								Development,{" "}
								<strong>University of Guelph</strong>.
							</Box>
						</Box>

						<Box className="work">
							<Box className="work-header">
								<MicOutlined sx={{ color: "#c3c3c3" }} />
								<Box className="work-title">
									Lecturer / Assistant Professor of
									Agricultural Extension and Communication
									(2018-2016)
								</Box>
							</Box>
							<Box className="work-subtitle">
								Dept. of Agricultural Economics and Extension,
								Faculty of Food and Agriculture.{" "}
								<strong>
									The University of the West Indies
								</strong>
								, St. Augustine, Trinidad and Tobago.
							</Box>
						</Box>

						<Box className="work">
							<Box className="work-header">
								<WorkHistory sx={{ color: "#c3c3c3" }} />
								<Box className="work-title">
									Post-doctoral Fellow (2016-2015)
								</Box>
							</Box>
							<Box className="work-subtitle">
								<strong>WorldFish Centre</strong>, CGIAR
								Conducted research on development approach
								fostering innovation and enduring change in
								aquatic systems in Bangladesh.
							</Box>
						</Box>

						<Box className="work">
							<Box className="work-header">
								<ContactSupport sx={{ color: "#c3c3c3" }} />
								<Box className="work-title">
									Capacity Development Consultant (2015-2014)
								</Box>
							</Box>
							<Box className="work-subtitle">
								Food and Agriculture Organization of the United
								Nations <strong>(FAO)</strong>, Rome.
							</Box>
						</Box>

						<Box className="work">
							<Box className="work-header">
								<Forest sx={{ color: "#c3c3c3" }} />
								<Box className="work-title">
									SSHRC Post-doc Fellow (2012- 2014)
								</Box>
							</Box>
							<Box className="work-subtitle">
								School of Environmental Design and Rural
								Development,{" "}
								<strong>University of Guelph</strong>, Ontario.
							</Box>
						</Box>

						<Box className="work">
							<Box className="work-header">
								<Biotech sx={{ color: "#c3c3c3" }} />
								<Box className="work-title">
									Research Fellow (2011-2008)
								</Box>
							</Box>
							<Box className="work-subtitle">
								Centre for Development Research,{" "}
								<strong>
									University of Natural Resources and Life
									Sciences
								</strong>
								, Vienna.
							</Box>
						</Box>

						<Box className="work">
							<Box className="work-header">
								<SettingsVoice sx={{ color: "#c3c3c3" }} />
								<Box className="work-title">
									Lecturer/Assistant Professor (2002-2005)
								</Box>
							</Box>
							<Box className="work-subtitle">
								Department of Agricultural Extension Education,{" "}
								<strong>
									Bangladesh Agricultural University
								</strong>
								, Mymensingh 2202, Bangladesh.
							</Box>
						</Box>
					</Box>
				}
			/>
		</Box>
	);
};

export default Works;
