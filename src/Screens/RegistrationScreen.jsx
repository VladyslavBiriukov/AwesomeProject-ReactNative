// import { TextInput, Text, View, Pressable, Image } from "react-native";
// import {styles} from "./Styles";
// import FormContainer from "../Components/FormContainer/FormContainer";


// const RegistrationScreen = () => {
//     return (
//         <FormContainer route="register">
//             <View style={styles.container}>
//                 <Text style={styles.title}>Реєстрація</Text>
//                 <TextInput
//                     style={styles.inputActive}
//                     placeholder="Login"
//                 />
//                 <TextInput
//                     style={styles.inputActive}
//                     placeholder="Email"
//                 />
//                 <TextInput
//                     style={styles.inputActive}
//                     placeholder="Password"
//                 />
//                 <Pressable
//                     style={styles.buttonPrimary}>
//                     <Text style={styles.buttonPrimaryText}>
//                         Зареєструватися
//                     </Text>
//                 </Pressable>
//                 <Pressable
//                     style={styles.buttonSecondary}>
//                     <Text style={styles.buttonSecondaryText}>
//                         Вже є аккаунт? Увійти
//                     </Text>
//                 </Pressable>
//             </View>
//         </FormContainer>
//     )
// };

// export default RegistrationScreen

import { useState } from "react";

import AuthorizationForm from "../Components/Authorization/AuthorizationForm";
import Input from "../Components/Authorization/Input";

export default function RegistrationScreen() {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = () => {
		console.log({ login, email, password });

		resetForm();
	};

	const resetForm = () => {
		setLogin("");
		setEmail("");
		setPassword("");
	};
	return (
		<AuthorizationForm
			title="Реєстрація"
			buttonTitle="Зареєстуватися"
			changeAuthorizationTitle="Вже є акаунт? Увійти"
			onSubmit={onSubmit}
		>
			<Input placeholder="Логін" onChangeText={setLogin} value={login} />
			<Input
				placeholder="Адреса електронної пошти"
				onChangeText={setEmail}
				value={email}
			/>
			<Input placeholder="Пароль" onChangeText={setPassword} value={password} />
		</AuthorizationForm>
	);
}
