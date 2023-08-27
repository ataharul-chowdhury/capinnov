import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

import "./styles/card.css";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<Box className="card">
			<Box className="card-container">
				<Box className="card-header">
					<Box className="card-icon">
						<FontAwesomeIcon icon={icon} />
					</Box>
					<Box className="card-title">{title}</Box>
				</Box>
				<Box className="card-body">
					<Box className="card-text">{body}</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Card;
