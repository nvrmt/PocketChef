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

class AlarmScreen extends Component {
	constructor(props) {
		super(props);

		Navigation.events().bindComponent(this);
	}

	render() {
		return (
			<Grid>
				<Row style={styles.container}>
					<View>
						<Text h4>Alarm Screen</Text>
					</View>
				</Row>
			</Grid>

		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, null)(AlarmScreen);