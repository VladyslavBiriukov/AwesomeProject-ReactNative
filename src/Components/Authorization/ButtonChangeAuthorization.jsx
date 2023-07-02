import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonChangeAuthorization({ title }) {
	return (
		<Pressable>
			{({ pressed }) => (
				<Text
					style={[styles.textChangeAuthorization, pressed && styles.onPress]}
				>
					{title}
				</Text>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	textChangeAuthorization: {
		fontFamily: "Roboto-Regular",

		fontSize: 16,
		lineHeight: 19,
		color: "#1B4371",
	},
	onPress: {
		textDecorationColor: "#1B4371",
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
	},
});