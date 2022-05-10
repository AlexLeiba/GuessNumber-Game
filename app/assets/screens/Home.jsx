import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { color } from "./components/colors";

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [onClick, setOnclick] = useState(false);
  const [indiciu, setIndiciu] = useState("");
  const [incercari, setIncercari] = useState(5);
  const [felicitari, setFelicitari] = useState("");
  const { height } = useWindowDimensions();
  const [onFocus, setOnFocus] = useState(false);

  function handleRandomNumber() {
    setOnclick(true);
    setFelicitari("");
    setIndiciu("");
    return Math.random() * 1 * 30;
  }
  console.log(randomNumber);

  function handleCheckNumber() {
    setIncercari(incercari - 1);
    if (incercari == 0) {
      setRandomNumber(0);
      setIncercari(5);
      setInputValue("");
      setIndiciu("");
    }
    if (inputValue > randomNumber) {
      setIndiciu("Try smaller!");
    } else if (inputValue < randomNumber) {
      setIndiciu("Try bigger!");
    } else if (inputValue == randomNumber) {
      setIndiciu("");
      setIncercari(6);
      setFelicitari(
        `Congratulations! you guessed the number:  ${randomNumber} `
      );
      setRandomNumber(0);
    }
    return;
  }

  useEffect(() => {
    if (onClick) {
      const result = handleRandomNumber();
      const finalResult = Math.round(result);
      setRandomNumber(finalResult);
      setOnclick(false);
    }

    console.log(`number`, randomNumber);
  }, [onClick]);

  useEffect(() => {}, []);
  return (
    <ScrollView>
      <ImageBackground
        style={{ height: "100%", width: "100%" }}
        source={require("../../assets/screens/images/back.jpg")}
      >
        <KeyboardAvoidingView
          style={{ height: height - 130 }}
          behavior={"padding"}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.iconContainer}>
              {randomNumber === 0 ? (
                <>
                  {felicitari === "" ? (
                    <>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          color: "black",
                          paddingTop: 0,
                          paddingBottom: 10,
                          color: "white",
                        }}
                      >
                        Guess The number between 1 and 30!
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          color: "black",
                          paddingTop: 0,
                          paddingBottom: 70,
                          color: "white",
                        }}
                      >
                        You have five attempts
                      </Text>
                    </>
                  ) : (
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "800",
                        textAlign: "center",
                        color: "black",
                        paddingTop: 0,
                        paddingBottom: 10,
                        color: "white",
                        marginBottom: 50,
                        width: 300,
                      }}
                    >
                      {felicitari}
                    </Text>
                  )}
                </>
              ) : (
                <Text
                  style={{
                    fontSize: 25,
                    textAlign: "center",
                    color: "red",
                    paddingTop: 0,
                    paddingBottom: 70,
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  {incercari === 0 ? "Game over!" : "Game started!"}
                </Text>
              )}
            </View>

            {incercari !== 0 ? (
              felicitari === "" ? (
                <>
                  <ImageBackground
                    source={require("../screens/images/background.jpg")}
                    zIndex={incercari === 0 ? 200 : 0}
                    resizeMethod={"auto"}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      borderColor: "white",
                      borderWidth: 1,
                      borderStyle: "solid",
                      marginRight: 20,
                      marginLeft: 20,
                      paddingBottom: 20,
                      paddingTop: 20,
                      borderRadius: 1,
                      marginBottom: 10,
                      shadowColor: "gray",
                      shadowOffset: { width: 5, height: 0 },
                      shadowOpacity: 11,
                      shadowRadius: 8,
                      height: 200,
                      zIndex: 4,
                      position: "relative",
                      backgroundColor: "red",
                    }}
                  >
                    <View
                      style={{
                        width: 110,
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                        position: "absolute",
                        right: 10,
                        borderColor: "gray",
                        borderStyle: "solid",
                        borderWidth: 1,
                        fontWeight: "800",
                        color: "white",
                        backgroundColor: incercari === 0 ? "red" : "blue",
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "700" }}>
                        Guesses left- {incercari}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        position: "absolute",
                        zIndex: 2,
                      }}
                    >
                      {incercari >= 5 ? (
                        <Image
                          source={require("../screens/images/pixelHearth.png")}
                          style={{ width: 40, height: 40 }}
                        />
                      ) : (
                        <Image
                          source={require("../screens/images/goood.png")}
                          style={{
                            width: 33,
                            height: 30,
                            marginBottom: 5,
                            marginLeft: 4,
                            marginTop: 4,
                            marginRight: 5,
                          }}
                        />
                      )}
                      {incercari >= 4 ? (
                        <Image
                          source={require("../screens/images/pixelHearth.png")}
                          style={{
                            width: 40,
                            height: 40,
                          }}
                        />
                      ) : (
                        <Image
                          source={require("../screens/images/goood.png")}
                          style={{
                            width: 33,
                            height: 30,
                            marginBottom: 5,
                            marginLeft: 4,
                            marginTop: 4,
                            marginRight: 5,
                          }}
                        />
                      )}
                      {incercari >= 3 ? (
                        <Image
                          source={require("../screens/images/pixelHearth.png")}
                          style={{
                            width: 40,
                            height: 40,
                          }}
                        />
                      ) : (
                        <Image
                          source={require("../screens/images/goood.png")}
                          style={{
                            width: 33,
                            height: 30,
                            marginBottom: 5,
                            marginLeft: 4,
                            marginTop: 4,
                            marginRight: 5,
                          }}
                        />
                      )}
                      {incercari >= 2 ? (
                        <Image
                          source={require("../screens/images/pixelHearth.png")}
                          style={{
                            width: 40,
                            height: 40,
                          }}
                        />
                      ) : (
                        <Image
                          source={require("../screens/images/goood.png")}
                          style={{
                            width: 33,
                            height: 30,
                            marginBottom: 5,
                            marginLeft: 4,
                            marginTop: 4,
                            marginRight: 5,
                          }}
                        />
                      )}
                      {incercari >= 1 ? (
                        <Image
                          source={require("../screens/images/pixelHearth.png")}
                          style={{
                            width: 40,
                            height: 40,
                          }}
                        />
                      ) : (
                        <Image
                          source={require("../screens/images/goood.png")}
                          style={{
                            width: 33,
                            height: 30,
                            marginBottom: 5,
                            marginLeft: 4,
                            marginTop: 4,
                            marginRight: 5,
                          }}
                        />
                      )}
                    </View>

                    <View style={{ width: "100%", textAlign: "center" }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "800",
                          fontSize: 20,
                        }}
                      >
                        Type the number here !
                      </Text>
                    </View>

                    <View
                      style={{
                        width: 60,
                        shadowColor: "gray",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 1,
                        shadowRadius: "1px",
                        marginTop: 5,
                        zIndex: 100,
                      }}
                    >
                      <TextInput
                        width={"100%"}
                        borderRadius={5}
                        backgroundColor={"white"}
                        height={50}
                        paddingLeft={19}
                        onChangeText={(value) => setInputValue(value)}
                        value={inputValue}
                        fontSize={25}
                        onFocus={() => {
                          setOnFocus(true);
                        }}
                        onBlur={() => {
                          setOnFocus(false);
                        }}
                        borderColor={onFocus ? "red" : "gray"}
                        borderStyle={"solid"}
                        borderWidth={1}
                        color={felicitari ? "red" : "black"}
                      />
                    </View>
                    {/* Indication */}
                  </ImageBackground>

                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      color: "black",
                      paddingTop: 0,
                    }}
                  >
                    {indiciu}
                  </Text>
                </>
              ) : (
                <>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "100%",
                      alignItems: "center",
                      position: "absolute",
                      top: 180,
                      left: 200,
                      // zIndex: 0,
                    }}
                  >
                    {indiciu !== "" ? (
                      {}
                    ) : (
                      <Text
                        style={{
                          fontSize: 23,
                          fontWeight: "800",
                          position: "absolute",
                          top: 200,
                          textAlign: "center",
                          color: "red",
                          paddingTop: 10,
                          width: 250,
                          zIndex: 200,
                        }}
                      >
                        {felicitari}
                      </Text>
                    )}
                  </View>
                  <ImageBackground
                    source={require("../screens/images/girl2.png")}
                    zIndex={incercari === 0 ? 200 : 0}
                    resizeMethod={"resize"}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      borderColor: "white",
                      borderWidth: 1,
                      borderStyle: "solid",
                      marginRight: 20,
                      marginLeft: 20,
                      paddingBottom: 20,
                      paddingTop: 20,
                      borderRadius: 1,
                      marginBottom: 10,
                      shadowColor: "gray",
                      shadowOffset: { width: 5, height: 0 },
                      shadowOpacity: 11,
                      shadowRadius: 8,
                      height: 400,
                      zIndex: 4,
                      position: "relative",
                      backgroundColor: "green",
                    }}
                  ></ImageBackground>
                </>
              )
            ) : (
              <ImageBackground
                source={require("../screens/images/gameover.png")}
                zIndex={incercari === 0 ? 200 : 0}
                resizeMethod={"auto"}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  borderColor: "white",
                  borderWidth: 1,
                  borderStyle: "solid",
                  marginRight: 20,
                  marginLeft: 20,
                  paddingBottom: 20,
                  paddingTop: 20,
                  borderRadius: 1,
                  marginBottom: 10,
                  shadowColor: "gray",
                  shadowOffset: { width: 5, height: 0 },
                  shadowOpacity: 11,
                  shadowRadius: 8,
                  height: 200,
                  zIndex: 4,
                  position: "relative",
                  backgroundColor: "red",
                }}
              ></ImageBackground>
            )}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={
                randomNumber === 0 ? handleRandomNumber : handleCheckNumber
              }
              zIndex={100}
              style={{
                width: 250,
                backgroundColor: incercari === 0 ? "red" : "yellow",
                marginBottom: 100,
                height: 50,
                zIndex: 100,
                paddingTop: 12,
              }}
            >
              <Text
                style={{
                  color: incercari === 0 ? "white" : "black",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                {randomNumber === 0
                  ? "Start New Game"
                  : incercari === 0
                  ? "Game over, click to continue"
                  : "Check your number"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingLeft: 24,
    paddingRight: 24,
    height: "100%",
  },
  login: {
    width: "60%",
    height: 20,
    backgroundColor: color.yellow,
  },
  login2: {
    width: "60%",
    height: 20,
    backgroundColor: color.red,
  },
  login3: {
    width: "60%",
    height: 20,
    backgroundColor: color.green,
    paddingTop: 10,
  },
  images: {
    width: 80,
    height: 80,
  },
  iconContainer: {
    marginBottom: 50,
    top: 100,
    alignItems: "center",
  },
  paragraph: {
    color: "white",
    fontSize: 15,
    alignItems: "center",
  },
});
