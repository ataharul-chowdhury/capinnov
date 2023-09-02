import { useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import ResearchProgram from "./pages/research-program";

import ASIO from "./pages/asio";
import GNF from "./pages/gnf";
import SMAC from "./pages/smac";
import LiteratureDB from "./pages/demolibrary";

import TeachingPhilosophy from "./pages/TeachingPhilosophy"
import CoursesTaught from "./pages/CoursesTaught"

import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
				<Routes>
					<Route path="/capinnov" element={<Homepage />} />
					<Route path="/" element={<Homepage />} />
					<Route path="/research-program" element={<ResearchProgram />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />} />

					<Route path="/asio" element={<ASIO />} />
					<Route path="/gnf" element={<GNF />} />
					<Route path="/smac" element={<SMAC />} />
					<Route path="capinnov/literatureDB" element={<LiteratureDB />} />

					<Route path="/teaching-philosophy" element={<TeachingPhilosophy />} />
					<Route path="/courses-taught" element={<CoursesTaught />} />

					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
		</div>
	);
}

export default App;
