import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

export default function Post({ post }) {
	const [seeDetail, setSeeDetail] = useState(false);
	const handleClick = useCallback(() => {
		setSeeDetail(true);
	}, [post, setSeeDetail]);
	return (
		<View style={styles.container}>
			<Text style={styles.post} onClick={handleClick} onPress={handleClick}>
				{post.title}
			</Text>
			{seeDetail && <Text style={styles.detail}> {post.body}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	post: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	detail: {
		fontSize: 12,
		textAlign: "center",
		margin: 10,
	},
});
