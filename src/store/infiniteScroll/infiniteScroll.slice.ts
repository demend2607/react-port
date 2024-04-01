import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface PhotoListProps {
	id: string;
	alt_description: string;
	urls: {
		regular: string;
	};
	links: {
		html: string;
	};
}
export type PhotosProps = {
	photos: [];
	isLoading: boolean;
	error?: string | null;
};

export const getPhotosAsync = createAsyncThunk(
	'photos/getPhotosAsync',
	async (): Promise<{ photosData: [] }> => {
		const apiKey = 'z6jOybsOCbHB4mZWrnvfO-UFFdTUPBEHs2oFzykLSgM';
		const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${2}`;

		const response = await fetch(apiUrl);
		if (response.ok) {
			const photosData = await response.json();

			return { photosData };
		}
		throw new Error('Failed to fetch photos');
	}
);

export const INFINITE_SCROLL_INITIAL_STATE: PhotosProps = {
	photos: [],
	isLoading: false,
	error: null,
};

export const infiniteScrollSlice = createSlice({
	name: 'infiniteScroll',
	initialState: INFINITE_SCROLL_INITIAL_STATE,
	reducers: {},
	extraReducers: (builder) => {
		{
			builder.addCase(getPhotosAsync.pending, (state) => {
				state.isLoading = true;
				state.photos = [...state.photos];
				state.error = null;
			});
			builder.addCase(getPhotosAsync.fulfilled, (state, action) => {
				state.isLoading = false;
				state.photos = [...state.photos, ...action.payload.photosData];
				state.error = null;
			});
			builder.addCase(getPhotosAsync.rejected, (state, action) => {
				state.isLoading = false;
				state.photos = [];
				state.error = action.error.message;
			});
		}
	},
});

export default infiniteScrollSlice;
