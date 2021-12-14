import React from "react";
import ReactDOM from "react-dom";
import MainCard from "./Components/MainCard";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<MainCard
			image=""
			title="ON-TIME DELIVERY"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			image=""
			title="PARCELS"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			image=""
			title="QUALITY CHECK"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			image=""
			title="CUSTOMER SERVICE"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
