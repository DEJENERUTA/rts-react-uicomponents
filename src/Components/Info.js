import "./Detail.css";

const Info = ({ text, title }) => {
	return (
		<div className="info-container">
			<h2 className="card-title2">{title}</h2>
			<p className="lorem-text">{text}</p>
		</div>
	);
};

export default Info;
