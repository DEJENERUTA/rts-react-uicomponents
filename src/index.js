import React from "react";
import ReactDOM from "react-dom";
import MainCard from "./Components/MainCard";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<MainCard
			color="blue"
			image="assets/uicomponent1.png"
			title="ON-TIME DELIVERY"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			color="red"
			image="assets/uicomponent2.png"
			title="PARCELS"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			color="green"
			image="assets/uicomponent3.png"
			title="QUALITY CHECK"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			color="yellow"
			image="assets/uicomponent4.png"
			title="CUSTOMER SERVICE"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
