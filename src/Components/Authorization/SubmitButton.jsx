import { Pressable, StyleSheet, Text } from "react-native";

export default function SubmitButton({ title, onSubmit }) {
	return (
		<Pressable onPress={onSubmit}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		marginBottom: 16,

		width: "100%",
		height: 51,

		backgroundColor: "#ff6c00",

		borderRadius: 100,
	},

	pressed: { backgroundColor: "#ff6c00" },

	buttonText: {
		fontFamily: "Roboto-Regular",

		fontSize: 16,
		color: "#ffffff",
	},
});