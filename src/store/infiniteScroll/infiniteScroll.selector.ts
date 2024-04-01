import { createSelector } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '../store';
import { PhotosProps } from './infiniteScroll.slice';
import { useDispatch } from 'react-redux';

const selectPhotosReducer = (state: RootState): PhotosProps => state.infiniteScroll;

export const selectPhotosItems = createSelector([selectPhotosReducer], (photos) => photos);

export const selectPhotosItem = createSelector([selectPhotosItems], (photos) => {
	return {
		isLoading: photos.isLoading,
		isError: photos.error,
		photos: photos.photos,
	};
});

export const useAppDispatch: () => AppDispatch = useDispatch;
