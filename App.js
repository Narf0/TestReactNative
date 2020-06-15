import * as React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./components/Main";

export default function App() {
	return (
		<View style={styles.container}>
			<Main />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
});
