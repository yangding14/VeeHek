import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export const colors = {
    yellow: "#FFC107",
    white: "#FFFFFF",
    black: "#000000",
    bgWhite: "#F9F9F9",
    greyBlue: "#2C383F",
    redLight: "#EBADA2",
    yellowLight: "#F8D186",
    greenLight: "#B9CEBF",
    purpleLight: "#CEB9C6",
    grey:"#ADADAD",
    blueLight:"#307FE2",
    green:"#31B447",
    orange:"#FFA500",
    red:"#FF0000",
};

const designed_on_width = 430;
const designed_on_height = 932;
// scale width & height
const sw = (width) => {
    return (Dimensions.get("window").width * width) / designed_on_width;
};
const sh = (height) => {
    return (Dimensions.get("window").height * height) / designed_on_height;
};
export { sw, sh };

export const fonts = {
    PoppinsLight: "PoppinsLight",
    PoppinsMedium: "PoppinsMedium",
    PoppinsRegular: "PoppinsRegular",
    PoppinsSemiBold: "PoppinsSemiBold",
    PoppinsBold: "PoppinsBold",
    PoppinsExtraBold: "PoppinsExtraBold",
    PoppinsBlack: "PoppinsBlack", 

    RubikLight: "RubikLight",
    RubikRegular: "RubikRegular",
    RubikMedium: "RubikMedium",
    // rubiksemibold: "RubikSemiBold", // semi bold nt available yet (if need to use, need to add in assets/fonts folder and in App.js useFonts method)
    RubikBold: "RubikBold",

    InterLight: "InterLight",
    InterRegular: "InterRegular",
    InterMedium: "InterMedium",
    InterSemiBold: "InterSemiBold",
    InterBold: "InterBold",
    InterExtraBold: "InterExtraBold",
    InterBlack: "InterBlack"
}

export const appStyles = StyleSheet.create({
    appBackground: {
        backgroundColor: colors.bgWhite,
        flex: 1,
        marginHorizontal: sw(40),
        marginTop: sh(80)
    }
})