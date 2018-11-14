// @flow
import robodux from 'robodux';
import { Action } from 'redux';

interface Navigation {
	activeScreen: string;
	working: boolean;
}

interface State {
	navigation: Navigation;
}

interface NavigationActions {
	switchToScreen: (payload: ?Object) => Action;
	switchToScreen_Success: (payload: ?Object) => Action;
	switchToScreen_Failure: (payload: ?Object) => Action;
}

export const NavigationRedux = robodux<Navigation, NavigationActions, State>({
	slice: 'navigation',
	initialState: {
	    activeScreen: null,
		working: false,
	},
	actions:
	{
		switchToScreen: (state: Navigation, payload: Object) =>
		{
			state.working = true;
			state.activeScreen = payload.screen;
		},
        switchToScreen_Success: (state: Navigation, payload: Object) =>
		{
			state.working = false;
		},
        switchToScreen_Failure: (state: Navigation, payload: Object) =>
		{
			state.working = false;
		},
	}
});

// Selectors

export const reducer = NavigationRedux.reducer;