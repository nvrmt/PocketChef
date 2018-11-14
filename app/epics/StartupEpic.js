import {filter, mapTo, delay} from 'rxjs/operators';
import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';
import {ofType} from 'redux-observable';

// Actions & Types
import {StartupRedux} from '../redux/StartupRedux';

export const StartupEpic = action$ => action$.pipe(
	ofType(StartupRedux.actions.init),
	delay(1000),
	mapTo(StartupRedux.actions.init_Success(true))
);
