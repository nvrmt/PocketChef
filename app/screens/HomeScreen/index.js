import {Component} from "react";
import {Text, View} from "react-native";
import React from "react";

import {Navigation} from "react-native-navigation";

import {styles} from './style';
import {StartupRedux} from "../../redux/StartupRedux";
import connect from "react-redux/es/connect/connect";
import {Grid, Row} from "react-native-easy-grid";
import {Button, Header, H4} from "react-native-elements";

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		Navigation.events().bindComponent(this);

	}

	render() {
		return (
			<Grid>
				<Row style={styles.container}>
					<View>
						<Text h4>Home Screen</Text>
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


export default connect(mapStateToProps, null)(HomeScreen);