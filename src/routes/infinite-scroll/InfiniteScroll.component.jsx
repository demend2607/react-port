import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PhotosList from '../../components/photosList/PhotosList.component';
import Spinner from '../../components/spinner/Spinner.component';

import './infiniteScroll.styles.scss';

const InfiniteScroll = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [photosList, setPhotosList] = useState([]);
	const [page, setPage] = useState(1);
	const [isError, setIsError] = useState(null);

	let count = 5;
	const apiKey = 'z6jOybsOCbHB4mZWrnvfO-UFFdTUPBEHs2oFzykLSgM';
	let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

	const fetchPhotos = async () => {
		setIsLoading(true);
		setIsError(null);

		try {
			const response = await fetch(apiUrl);
			const photosData = await response.json();
			console.log(photosData);

			setPhotosList((prevPhotos) => [...prevPhotos, ...photosData]);
			setPage((prevPage) => prevPage + 1);
			if (photosList.length > 50) {
				throw new Error('Rate Limit Exceeded, take a little rest');
			}
		} catch (error) {
			setIsError(error);
		} finally {
			if (page < 1) {
				setIsLoading(false);
			} else {
				setTimeout(() => {
					setIsLoading(false);
				}, 500);
			}
		}
	};

	useEffect(() => {
		fetchPhotos();
		//eslint-disable-next-line
	}, []);

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
			isLoading
		) {
			return;
		}
		fetchPhotos();
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading]);

	console.log(photosList);

	return (
		<div className="scroller-container">
			<span className="scroll-title">Unsplash api - infinite scroll</span>
			{isLoading && page < 1 ? (
				<Spinner />
			) : isError !== null ? (
				<h1>Rate Limit Exceeded, take a little rest</h1>
			) : (
				<div className="image-container">
					{photosList.map((photo) => {
						return (
							<Link to={photo.links.html} key={photo.id} target="_blank">
								<PhotosList photo={photo} />
							</Link>
						);
					})}
					{isLoading && <Spinner />}
				</div>
			)}
		</div>
	);
};

export default InfiniteScroll;
