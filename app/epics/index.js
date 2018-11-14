import {combineEpics} from 'redux-observable';
import {StartupEpic} from './StartupEpic';
import {NavigationEpic} from "./NavigationEpic";

export const rootEpic = combineEpics(
	StartupEpic,
	NavigationEpic
);