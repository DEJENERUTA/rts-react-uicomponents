import React from "react";
import ReactDOM from "react-dom";
import MainCard from "./Components/MainCard";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<MainCard
			profilePicture="dejene.png"
			aboutTravelText="it's windy. The cool breaz of the ocean . it gives , a sense of beauty. in motion. All is flowing , rushing and tide-And I sit i wonder, dreaming beside"
			color="#005AEE"
			image="assets/uicomponent1.png"
			title="ON-TIME DELIVERY"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			color="#FFA767"
			image="assets/uicomponent2.png"
			title="PARCELS"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			color="#0AACDC"
			image="assets/uicomponent3.png"
			title="QUALITY CHECK"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
		<MainCard
			color="#597AEF"
			image="assets/uicomponent4.png"
			title="CUSTOMER SERVICE"
			infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam diam sit "
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
