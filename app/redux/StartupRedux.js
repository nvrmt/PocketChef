// @flow
import robodux from 'robodux';
import { Action } from 'redux';

interface Startup {
	updated: boolean;
}

interface State {
	startup: Startup;
}

interface StartupActions {
	init: (payload: boolean) => Action;
	init_Success: (payload: boolean) => Action;
	init_Failure: (payload: boolean) => Action;
}

export const StartupRedux = robodux<Startup, StartupActions, State>({
	slice: 'startup',
	initialState: {
	    updated: false
	},
	actions:
	{
		init: (state: Startup, payload: boolean) =>
		{

		},
        init_Success: (state: Startup, payload: boolean) =>
		{

		},
        init_Failure: (state: Startup, payload: boolean) =>
		{

		},
	}
});

// Selectors

export const reducer = StartupRedux.reducer;