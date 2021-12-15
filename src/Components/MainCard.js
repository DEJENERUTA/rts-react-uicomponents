import "./Card.css";
import ImageContainer from "./ImageContainer";
import Info from "./Info";

const MainCard = ({ color, image, infoText, title }) => {
	return (
		<div className="app-container" style={{ backgroundColor: color }}>
			<ImageContainer picture={image} />
			<Info text={infoText} title={title} />
		</div>
	);
};
const styles = {
	color: "blue",
};
export default MainCard;
