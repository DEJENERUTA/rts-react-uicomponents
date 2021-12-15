const ImageContainer = ({ picture }) => {
	return (
		<div className="img-container">
			<img className="mypic" src={picture} alt="pic" />
		</div>
	);
};

export default ImageContainer;
