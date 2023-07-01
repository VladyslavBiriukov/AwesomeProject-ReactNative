import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import * as Font from "expo-font";
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View>
      {/* <Text style={{ fontFamily: 'Roboto', fontSize: 30 }}>Hello World</Text> */}
      {/* <StatusBar style="auto" /> */}
      <RegistrationScreen />
      <LoginScreen />
    </View>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#61dafb',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
