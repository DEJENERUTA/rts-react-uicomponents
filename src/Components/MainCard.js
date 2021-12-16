import Background from "./Background";
import Travel from "./Travel";
import ImageContainer from "./ImageContainer";
import Info from "./Info";
import "./Card.css";

const MainCard = ({
	profilePicture,
	aboutTravelText,
	color,
	image,
	infoText,
	title,
}) => {
	return (
		<div className="main-container">
			<Background profilePicture={profilePicture} />
			<Travel traveltext={aboutTravelText} />
			<div className="app-container" style={{ backgroundColor: color }}>
				<ImageContainer picture={image} />
				<Info text={infoText} title={title} />
			</div>
		</div>
	);
};
const styles = {
	color: "blue",
};
export default MainCard;
