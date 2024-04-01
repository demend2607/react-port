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
	const { id, alt_description, urls } = photo;
	return (
		<>
			<img key={id} src={urls.regular} alt={alt_description} title={alt_description}></img>
		</>
	);
};

export default PhotosList;
