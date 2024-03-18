import { Middleware } from 'redux';
export const logger: Middleware<any> = (store) => (next) => (action) => {
	console.log('Current state:', store.getState());
	console.log('Action:', action);

	return next(action);
};
