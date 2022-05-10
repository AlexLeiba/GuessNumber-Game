import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";

export function Register({ navigation }) {
  const { height } = useWindowDimensions();
  const [inputState, setInputState] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);
  const [image, setImage] = useState(false);
  const [image2, setImage2] = useState(false);
  console.log(focused);
  function handleClick() {
    if (inputState) {
      setMessage(inputState);
    } else {
      return setMessage("");
    }
    return;
  }

  useEffect(() => {
    if (
      inputState.toLowerCase() === "alex" ||
      inputState.toLowerCase() === "mihai" ||
      inputState.toLowerCase() === "mihai tacot" ||
      inputState.toLowerCase() === "alexandru" ||
      inputState.toLowerCase() === "tacot mihai"
    ) {
      setImage(true);
      setImage2(false);
    } else if (message && inputState) {
      setImage2(true);
      setImage(false);
    }

    setTimeout(() => {
      if (image2) setImage2(false);
    }, 2000);
  }, [message]);

  useEffect(() => {
    if (inputState === "") {
      setMessage("");
      setImage(false);
    }
  }, [inputState, image, message]);
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          style={{
            height: height - 100,
          }}
          behavior={"padding"}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            ></View>

            <View>
              <Text style={{ textAlign: "center" }}>Ceau</Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Image
                style={styles.image2}
                source={require("../../assets/image1.jpeg")}
              />
            </View>

            <TextInput
              width={"100%"}
              backgroundColor={"white"}
              height={40}
              borderRadius={20}
              placeholder="text here"
              paddingLeft={20}
              onChangeText={(value) => setInputState(value)}
              value={inputState}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                borderColor: focused ? "gold" : "black",
                borderStyle: "solid",
                borderWidth: 1,
              }}
              inlineImageLeft={"icon.png"}
            />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {message === "" && (
                <Text style={{ fontSize: 20, width: 300, textAlign: "center" }}>
                  Press start game and try to Guess The number between 1 and 30!
                </Text>
              )}

              {message !== "" && image ? (
                <Text>{message} numele vostru este turbat!!</Text>
              ) : (
                <Text></Text>
              )}
            </View>

            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {image ? (
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require("./images/icon.png")}
                />
              ) : (
                <Text></Text>
              )}
              {image2 ? (
                <>
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require("./images/icon2.png")}
                  />
                  <Text>Numele introdus este o saracie</Text>
                </>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flex: 1,
              marginBottom: 50,
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: "blue",
                borderRadius: 20,
                height: 40,
                zIndex: 20,
              }}
            >
              <Button
                width={"100%"}
                title={"Check name"}
                backgroundColor={"black"}
                borderRadius={20}
                color={"white"}
                height={50}
                onPress={handleClick}
              />
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: "green",
                borderRadius: 20,
                height: 40,
                zIndex: 20,
                marginTop: 20,
              }}
            >
              <Button
                width={"100%"}
                title={"Next Game"}
                backgroundColor={"black"}
                borderRadius={20}
                color={"white"}
                height={50}
                onPress={() => navigation.navigate("number")}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    height: "100%",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  image2: {
    width: 250,
    height: 200,
    borderRadius: 20,
  },
});
