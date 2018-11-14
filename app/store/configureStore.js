import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';


// creates the store
export default (rootReducer) => {
	/* ------------- Redux Configuration ------------- */

	const middleware = [];
	const enhancers = [];

	/* ------------- Assemble Middleware ------------- */

	const epicMiddleware = createEpicMiddleware();

	middleware.push(epicMiddleware);

	enhancers.push(applyMiddleware(...middleware));

	const createAppropriateStore = (__DEV__) ? console.tron.createStore : createStore;
	const store = createAppropriateStore(rootReducer, compose(...enhancers));

	return {
		store,
		epicMiddleware
	}
}

