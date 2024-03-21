import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNav from "./navigation/AppNav";
import Test from "./screens/Test";
import { useFonts } from "expo-font";
import Wallet_Home from "./screens/Wallet_Home";
import { colors } from "./styles/GlobalStyle";
import  Settings from "./screens/Settings";
import Settings_EditProfile from "./screens/Settings_EditProfile";

export default function App() {
  const [loaded, error] = useFonts({
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsBlack: require("./assets/fonts/Poppins-Black.ttf"),
    RubikLight: require("./assets/fonts/Rubik-Light.ttf"),
    RubikRegular: require("./assets/fonts/Rubik-Regular.ttf"),
    RubikMedium: require("./assets/fonts/Rubik-Medium.ttf"),
    RubikBold: require("./assets/fonts/Rubik-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.otf"),
    InterRegular: require("./assets/fonts/Inter-Regular.otf"),
    InterMedium: require("./assets/fonts/Inter-Medium.otf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.otf"),
    InterBold: require("./assets/fonts/Inter-Bold.otf"),
    InterExtraBold: require("./assets/fonts/Inter-ExtraBold.otf"),
    InterBlack: require("./assets/fonts/Inter-Black.otf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    // <View style={styles.container}>
    //   <Text>我离开!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <AppNav />
    <View style={styles.container}>
      {/* <Wallet_Home /> */}
      {/* <Settings/>  */}
      <Settings_EditProfile/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9"
  },
});
