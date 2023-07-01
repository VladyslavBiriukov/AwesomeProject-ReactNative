import { TextInput, Text, View, Pressable, Image } from "react-native";
import {styles} from "./Styles";


const RegistrationScreen = () => {
    return (
        <View style={{
            marginTop: 92,
            marginBottom: -65,
        }}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
                style={styles.inputActive}
                placeholder="Login"
            />
            <TextInput
                style={styles.inputActive}
                placeholder="Email"
            />
            <TextInput
                style={styles.inputActive}
                placeholder="Password"
            />
            <Pressable
                style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>
                    Зареєструватися
                </Text>
            </Pressable>
            <Pressable
                style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>
                    Вже є аккаунт? Увійти
                </Text>
            </Pressable>
        </View>
    )
}

export default RegistrationScreen
