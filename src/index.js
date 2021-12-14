import React from "react";
import ReactDOM from "react-dom";
import MainCard from "./Components/MainCard";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<MainCard
			title="ON-TIME DELIVERY"
			infoText="I am Dejene a React Developer,
			Courteous and enthusiastic, I am passionate about IT and everything in its
			orbit"
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
