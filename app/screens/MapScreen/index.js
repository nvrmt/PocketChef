import {Component} from "react";
import {View, Image} from "react-native";
import {Text} from 'react-native-elements';
import React from "react";

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import {styles} from './style';
import {Grid, Row, Col} from "react-native-easy-grid";
import connect from "react-redux/es/connect/connect";
import {Navigation} from "react-native-navigation";

import {NavigationRedux} from "../../redux/NavigationRedux";

//private sk.eyJ1Ijoic25hdmVyaXMiLCJhIjoiY2pueHZkdWhyMDR3YzN2cGNkaGVwa2dyMSJ9.KuD7b06v369inj_lDwDGgQ


class MapScreen extends Component {
	constructor(props) {
		super(props);

		Navigation.events().bindComponent(this);
	}

	shouldComponentUpdate() {
		if(this.props.activeScreen !== "neverl8.MapScreen") {
			return false;
		}
	}

	render() {
		return (
			<MapboxGL.MapView
				showUserLocation={true}
				zoomLevel={ 16 }
				styleURL={ MapboxGL.StyleURL.Street }
				centerCoordinate={[-82.437465, 8.431490]}
				style={ {flex: 1} }
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		activeScreen: NavigationRedux.selectors.getNavigation({navigation: state.navigation})
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, null)(MapScreen);