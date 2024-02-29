import { FC } from 'react';

export type PhotoProps = {
	photo: {
		id: string;
		alt_description: string;
		urls: {
			regular: string;
		};
	};
};

const PhotosList: FC<PhotoProps> = ({ photo }) => {
	console.log(photo);

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
