import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({ placeholder, onChangeText, value }) {
	const [focus, setFocus] = useState(false);
	const [hidePasword, setHidePasword] = useState(true);

	const isPassword = placeholder === "Пароль";
	return (
		<View>
			<TextInput
				style={[styles.input, focus && styles.onFocus]}
				placeholder={placeholder}
				onChangeText={onChangeText}
				value={value}
				secureTextEntry={isPassword ? hidePasword : false}
				onFocus={() => setFocus(!focus)}
				onBlur={() => setFocus(!focus)}
			/>
			{isPassword && (
				<Pressable
					style={styles.showPassword.container}
					onPress={() => setHidePasword(!hidePasword)}
				>
					<Text style={styles.showPassword.text}>
						{hidePasword ? "Показати" : "Сховати"}
					</Text>
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		fontFamily: "Roboto-Regular",
		fontSize: 16,
		lineHeight: 19,

		borderWidth: 1,
		borderRadius: 8,
		color: "#212121",
		padding: 16,

		borderColor: "#E8E8E8",
		backgroundColor: "#F6F6F6",
	},

	onFocus: { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },

	showPassword: {
		container: {
			position: "absolute",
			top: 16,
			right: 16,
			widht: 72,
		},
		text: {
			color: "#1B4371",
			fontFamily: "Roboto-Regular",
			fontSize: 16,
			lineHeight: 19,
		},
	},
});