import React from "react";
import { Image, View } from "react-native";

export function SplashScreen() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Image
        source={require("../../assets/screens/images/anime2.gif")}
        resizeMode="center"
        width={"100%"}
        height={"100%"}
        zIndex={2}
      />
    </View>
  );
}
