import React from 'react';
import {Navigation} from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

// Screens
import Launch from './LaunchScreen';
import Home from './HomeScreen';
import _Map from './MapScreen';
import Alarm from './AlarmScreen';


export const LAUNCH_SCREEN = 'neverl8.LaunchScreen';
export const HOME_SCREEN = 'neverl8.HomeScreen';
export const MAP_SCREEN = 'neverl8.MapScreen';
export const ALARM_SCREEN = 'neverl8.AlarmScreen';

export const Screens = new Map();
Screens.set(LAUNCH_SCREEN, Launch);
Screens.set(HOME_SCREEN, Home);
Screens.set(MAP_SCREEN, _Map);
Screens.set(ALARM_SCREEN, Alarm);

export const startApp = () => {

	return Navigation.setRoot({
		root: {
			component: {
				name: LAUNCH_SCREEN,
			}
		}
	});
};

export async function mainScreen() {

	let homeIcon = await getIcon("home");
	let mapIcon = await getIcon("map");

	return Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'BottomTabsId',
				children: [
					{
						component: {
							name: HOME_SCREEN,
							options: {
								bottomTab: {
									fontSize: 12,
									text: 'Home',
									icon: homeIcon,
									iconColor: 'black',
									selectedIconColor: '#8d21ff',
									textColor: 'black',
									selectedTextColor: '#ed93ff',
								}
							}
						},
					},
					{
						component: {
							name: MAP_SCREEN,
							options: {
								bottomTab: {
									text: 'Map',
									fontSize: 12,
									icon: mapIcon,
									iconColor: 'black',
									selectedIconColor: '#8d21ff',
									textColor: 'black',
									selectedTextColor: '#ed93ff',
								}
							}
						},
					},
					{
						component: {
							name: ALARM_SCREEN,
							options: {
								bottomTab: {
									fontSize: 12,
									text: 'Alarms',
									icon: homeIcon,
									iconColor: 'black',
									selectedIconColor: '#8d21ff',
									textColor: 'black',
									selectedTextColor: '#ed93ff',
								}
							}
						},
					},
				],
			}
		}
	})
}

async function getIcon(name) {
	return await Icon.getImageSource(name);
}