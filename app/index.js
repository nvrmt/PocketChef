import { Navigation } from 'react-native-navigation';
import { Screens, startApp } from './screens/index';
import {Provider, connect} from 'react-redux';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import {NavigationRedux} from "./redux/NavigationRedux";


require('./config');

MapboxGL.setAccessToken("pk.eyJ1Ijoic25hdmVyaXMiLCJhIjoiY2pueHd5anRmMHpkZzNxa2dvc20zazkxeCJ9.6WxNJX8FiQuHuWpBbKI8Ig");

import createStore from './redux';


const store = createStore();

Screens.forEach((screen, key) => {
	Navigation.registerComponentWithRedux(key, () => screen, Provider, store);
});

Navigation.events().registerAppLaunchedListener(() => {
	startApp();
});

Navigation.events().registerComponentDidAppearListener(({componentId, componentName}) => {
	store.dispatch(NavigationRedux.actions.switchToScreen({screen: componentName}));
});

Navigation.events().registerComponentDidDisappearListener(({componentId, componentName}) => {

});

Navigation.events().registerCommandListener(({name, params}) => {

});

Navigation.events().registerCommandCompletedListener(({commandId, completionTime, params}) => {

});

Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex, unselectedTabIndex}) => {

});

Navigation.events().registerNavigationButtonPressedListener(({buttonId}) => {

});