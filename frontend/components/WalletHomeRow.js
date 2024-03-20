import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors, fonts, sh } from "../styles/GlobalStyle";

function WalletHomeRow({text}) {
  return (
    <View style={styles.background}>
      <Text style={{ fontFamily: fonts.RubikRegular, fontSize: sh(18) }}>
        {text}
      </Text>
      <Image source={require("../assets/arrow_right.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    paddingVertical: sh(20),
    alignContent: "center",
    justifyContent: "space-between",
    // backgroundColor: colors.yellow,
  },
});

export default WalletHomeRow;
