import {combineReducers} from 'redux';
import configureStore from '../store/configureStore';
import {rootEpic} from "../epics";


/* ------------- Assemble The Reducers ------------- */

export const reducers = combineReducers({
	startup: require('../redux/StartupRedux').reducer,
	navigation: require('../redux/NavigationRedux').reducer
});


export default () => {
	let {store, epicMiddleware} = configureStore(reducers);

	if (module.hot) {
		module.hot.accept(() => {
			const nextRootReducer = require('./').reducers;
			store.replaceReducer(nextRootReducer);
		})
	}

	epicMiddleware.run(rootEpic);

	return store;
}
