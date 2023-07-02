// import {TextInput, Text, View, Pressable} from "react-native";
// import { styles } from "./Styles"


// const LoginScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Вхід</Text>
//             <TextInput
//                 style={styles.inputActive}
//                 placeholder="Email"
//             />
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.inputActive}
//                     placeholder="Password"
//                 />
//                 <Pressable
//                     style={styles.passShower}>
//                     <Text style={styles.passShowerText}>
//                         Показати
//                     </Text>
//                 </Pressable>
//             </View>
//             <Pressable
//                 style={styles.buttonPrimary}>
//                 <Text style={styles.buttonPrimaryText}>Увійти</Text>
//             </Pressable>
//             <Pressable
//                 style={styles.buttonSecondary}>
//                 <Text style={styles.buttonSecondaryText}>
//                     Немає аккаунту? Зареєструватися
//                 </Text>
//             </Pressable>
//         </View>
//     )
// };

// export default LoginScreen;

import { useState } from "react";

import AuthorizationForm from "../Components/Authorization/AuthorizationForm";
import Input from "../Components/Authorization/Input";

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = () => {
		console.log({ email, password });
		resetForm();
	};

	const resetForm = () => {
		setEmail("");
		setPassword("");
	};
	return (
		<AuthorizationForm
			title="Увійти"
			buttonTitle="Увійти"
			changeAuthorizationTitle="Немає акаунту? Зареєструватися"
			onSubmit={onSubmit}
		>
			<Input
				placeholder="Адреса електронної пошти"
				onChangeText={setEmail}
				value={email}
			/>
			<Input placeholder="Пароль" onChangeText={setPassword} value={password} />
		</AuthorizationForm>
	);
}