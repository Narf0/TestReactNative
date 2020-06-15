import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Post from "./Post";

function servicePosts() {
	return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
}

export default function Main() {
	const [posts, setPost] = useState([]);

	useEffect(() => {
		servicePosts().then((json) => {
			setPost(json);
			console.log(json);
		});
	}, [setPost]);

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					{posts.map((post, index) => (
						<Post key={index} post={post} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
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
