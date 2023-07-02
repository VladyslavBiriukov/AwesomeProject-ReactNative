// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import * as Font from "expo-font";
// import { useFonts } from 'expo-font';
// import RegistrationScreen from './src/Screens/RegistrationScreen';
// import LoginScreen from './src/Screens/LoginScreen';

// export default function App() {
// const [fontsLoaded] = useFonts({
// 		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
// 		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
// 	});

// 	if (!fontsLoaded) {
// 		return null;
//   };


//   return (
//     <View>
//       {/* <Text style={{ fontFamily: 'Roboto', fontSize: 30 }}>Hello World</Text> */}
//       {/* <StatusBar style="auto" /> */}
//       <RegistrationScreen />
//       {/* <LoginScreen /> */}
//     </View>
    
//   );
// }

import { StatusBar } from "expo-status-bar";
import {
	Keyboard,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View>
				{/* <LoginScreen /> */}
				<RegistrationScreen />
				<PostsScreen />
				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
	);
}

