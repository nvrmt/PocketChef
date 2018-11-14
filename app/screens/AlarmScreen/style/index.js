import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	header: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		alignSelf: 'stretch',
		width: '100%'
	},
	container: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
