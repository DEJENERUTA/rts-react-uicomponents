import "./Card.css";
import Info from "./Info";

const MainCard = ({ infoText, title }) => {
	return (
		<div className="app-container" style={styles}>
			<div className="img-container">
				<img className="mypic" src="assets/uicomponent1.png" alt="mypic" />
			</div>

			<Info text={infoText} title={title} />
		</div>
	);
};
const styles = {
	color: "blue",
};
export default MainCard;
