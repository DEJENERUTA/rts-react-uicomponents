import "./Travel.css";
const Travel = ({ traveltext }) => {
	return (
		<div className="travel-container">
			{/* <h2>Travel</h2> */}
			<p className="travel-text">{traveltext}</p>
		</div>
	);
};

export default Travel;
