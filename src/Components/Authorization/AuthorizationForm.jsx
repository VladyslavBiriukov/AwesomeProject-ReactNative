import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	ImageBackground,
} from "react-native";

import SubmitButton from "./SubmitButton";
import ButtonChangeAuthorization from "./ButtonChangeAuthorization";
import UserPhoto from "./UserPhoto";
import BackgroundImg from "../../Images/BackgroundImg.jpg";

export default function AuthorizationForm({
	title,
	buttonTitle,
	changeAuthorizationTitle,
	onSubmit,
	children,
}) {
	const isRegistration = title === "Реєстрація";
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			keyboardVerticalOffset={isRegistration ? -175 : -240}
		>
			<View style={styles.container}>
				<ImageBackground
					source={BackgroundImg}
					resizeMode="cover"
					style={styles.image}
				>
					<View
						style={[
							styles.form,
							{
								paddingTop: isRegistration ? 92 : 32,
								paddingBottom: isRegistration ? 78 : 144,
							},
						]}
					>
						{isRegistration && <UserPhoto />}
						<Text style={styles.title}>{title}</Text>

						<View style={styles.inputsList}>{children}</View>

						<SubmitButton title={buttonTitle} onSubmit={onSubmit} />

						<ButtonChangeAuthorization title={changeAuthorizationTitle} />
					</View>
				</ImageBackground>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: { flex: 1, justifyContent: "flex-end" },

	container: {
		height: "100%",
	},

	form: {
		display: "flex",
		alignItems: "center",

		paddingLeft: 16,
		paddingRight: 16,

		backgroundColor: "#fff",

		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	title: {
		fontFamily: "Roboto-Medium",
		color: "#212121",
		fontSize: 30,
		marginBottom: 32,
	},

	inputsList: {
		display: "flex",
		gap: 16,

		width: "100%",

		marginBottom: 43,
	},
});