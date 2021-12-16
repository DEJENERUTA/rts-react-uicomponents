import "./Header.css";
const Background = ({ profilePicture }) => {
	return (
		<header
			className="header-container"
			style={{ backgroundImage: `url('./assets/${profilePicture}')` }}
		></header>
	);
};

export default Background;
