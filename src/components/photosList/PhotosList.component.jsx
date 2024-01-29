const PhotosList = ({ photo }) => {
	return (
		<>
			<img
				key={photo.id}
				src={photo.urls.regular}
				alt={photo.alt_description}
				title={photo.alt_description}></img>
		</>
	);
};
export default PhotosList;
