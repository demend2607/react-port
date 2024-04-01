import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PhotoListProps, getPhotosAsync } from '../../store/infiniteScroll/infiniteScroll.slice';
import { selectPhotosItem, useAppDispatch } from '../../store/infiniteScroll/infiniteScroll.selector';

import PhotosList from '../../components/photosList/PhotosList.component';
import Spinner from '../../components/spinner/Spinner.component';

import './infiniteScroll.styles.scss';

const InfiniteScroll = () => {
	const dispatch = useAppDispatch();

	const [page, setPage] = useState<number>(1);

	const { isLoading, isError, photos } = useSelector(selectPhotosItem);

	useEffect(() => {
		dispatch(getPhotosAsync());
	}, [dispatch]);

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop - 200 !==
				document.documentElement.offsetHeight ||
			isLoading
		) {
			return;
		}
		dispatch(getPhotosAsync());
		setPage((prev) => prev + 1);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isLoading]);

	return (
		<div className="scroller-container">
			<span className="scroll-title">Unsplash api - infinite scroll</span>
			{isLoading && page < 1 ? (
				<Spinner />
			) : isError !== null ? (
				<h1>Caught error: {isError}</h1>
			) : (
				<div className="image-container">
					{photos.map((photo: PhotoListProps) => {
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
