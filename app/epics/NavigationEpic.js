// @flow
import {filter, mapTo, delay} from 'rxjs/operators';
import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';
import {ofType} from 'redux-observable';

import {NavigationRedux} from '../redux/NavigationRedux';

export const NavigationEpic = action$ => action$.pipe(
	ofType(NavigationRedux.actions.switchToScreen),
	delay(100),
	mapTo(NavigationRedux.actions.switchToScreen_Success())
);
