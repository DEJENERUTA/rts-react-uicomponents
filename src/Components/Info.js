import "./detail.css";

const Info = ({ text, title }) => {
	return (
		<div className="info-container">
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
};

export default Info;
