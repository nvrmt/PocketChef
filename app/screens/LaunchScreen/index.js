import {Component} from "react";
import {View, Image} from "react-native";
import {Text, Button, Header} from 'react-native-elements';
import React from "react";
import {connect} from 'react-redux';
import {Navigation} from "react-native-navigation";

import {mainScreen} from '../../screens';

import {StartupRedux} from '../../redux/StartupRedux';

import {styles} from './style';
import { Grid, Row, Col } from "react-native-easy-grid";

class LaunchScreen extends Component {
	constructor(props) {
		super(props);

		Navigation.events().bindComponent(this);
	}

	render() {
		return (
			<Grid>
				<Row style={styles.container}>
					<View>
						<Text h4>Launch Screen</Text>
						<Button title={"Enter"} onPress={this._onPress}/>
					</View>
				</Row>
			</Grid>

		);
	}


	_onPress = () => {
		//this.props.dispatch(AlarmRedux.actions.checkAlarms());

		mainScreen();
	};
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, null)(LaunchScreen);