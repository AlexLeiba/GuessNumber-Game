import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { SplashScreen } from "../splash/Splash";

import { color } from "./components/colors";

export function GuessNumber({ navigation }) {
  const [inputValue, setInputValue] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [onClick, setOnclick] = useState(false);
  const [indiciu, setIndiciu] = useState("");
  const [incercari, setIncercari] = useState(5);
  const [felicitari, setFelicitari] = useState("");
  const [onFocus, setOnFocus] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  function handleRandomNumber() {
    setOnclick(true);
    setFelicitari("");
    setIndiciu("");
    return Math.random() * 1 * 100;
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
      setInputValue("");
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

  let [fontsLoaded] = useFonts({
    fontMain2: require("../fonts/Quintessential-Regular.ttf"),
    pixelFont: require("../fonts/VT323-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      {!loading ? (
        <SplashScreen />
      ) : (
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={{
            uri: "https://i.pinimg.com/originals/46/e4/38/46e438a93cc58647274205fd7f5d8811.gif",
          }}
        >
          <ScrollView style={{ marginTop: 70 }}>
            <StatusBar barStyle={"light-content"} />

            <View style={{ flex: 1 }}>
              <View style={styles.iconContainer}>
                {randomNumber === 0 ? (
                  <>
                    {felicitari === "" ? (
                      <>
                        <Text
                          style={{
                            fontSize: 25,
                            textAlign: "center",
                            color: "black",
                            paddingTop: 20,
                            paddingBottom: 10,
                            color: "white",
                            fontFamily: "pixelFont",
                          }}
                        >
                          Guess The number between 1 and 100!
                        </Text>
                        <Text
                          style={{
                            fontSize: 24,
                            textAlign: "center",
                            color: "black",
                            paddingTop: 0,
                            paddingBottom: 70,
                            color: "white",
                            fontFamily: "pixelFont",
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
                      fontSize: 27,
                      textAlign: "center",
                      color: "red",
                      paddingTop: 20,
                      paddingBottom: 70,
                      color: "white",
                      fontWeight: "800",
                      fontFamily: "pixelFont",
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
                      source={{
                        uri: "https://cdn3.vectorstock.com/i/1000x1000/32/92/game-background-castle-seamless-parallax-vector-18533292.jpg",
                      }}
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
                          width: 90,
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
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "700",
                            fontFamily: "pixelFont",
                          }}
                        >
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
                            fontSize: 25,
                            fontFamily: "pixelFont",
                            color: "white",
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
                          keyboardType="numeric"
                          width={"100%"}
                          borderRadius={5}
                          backgroundColor={"white"}
                          height={50}
                          paddingLeft={15}
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
                        fontSize: 29,
                        textAlign: "center",
                        color: "white",
                        paddingTop: 0,
                        fontFamily: "pixelFont",
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
                            fontFamily: "pixelFont",
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
                    fontSize: 21,
                    fontFamily: "pixelFont",
                  }}
                >
                  {randomNumber === 0
                    ? "Start New Game"
                    : incercari === 0
                    ? "Game over, click to continue"
                    : "Check your number"}
                </Text>
              </TouchableOpacity>

              <View style={{ marginTop: 20 }} />

              <TouchableOpacity
                onPress={() => navigation.navigate("name")}
                style={{ backgroundColor: "red", height: 40, width: 200 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 35,
                    fontFamily: "pixelFont",
                  }}
                >
                  Exit
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      )}
    </>
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
