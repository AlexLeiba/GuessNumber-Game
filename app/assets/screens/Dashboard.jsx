import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  Text,
  Image,
} from "react-native";
import { GameCard } from "./components/GameCard/GameCard";
import { SplashScreen } from "../splash/Splash";

const games = [
  {
    id: 1,
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b77311fa27d585ab23ec8a40",
    title: "Tic tac toe",

    navigations: "game",
  },
  {
    id: 2,
    imageUrl:
      "https://www.funbrain.com/assets/img/content-cards/F2qRmLhRnmebc8jJAUjr_GuessTheNumber%403x.png",
    title: "Guess the number",
    description: "Guess the number between 1 and 30",
    navigations: "number",
  },
  {
    id: 3,
    imageUrl:
      "https://store-images.s-microsoft.com/image/apps.60781.13573217801145142.91d9f626-0b74-4cb5-b826-4fb3967b3540.6433e7bb-08ae-4c09-a0b6-8da17eaa6341?mode=scale&q=90&h=720&w=1280",
    title: "Toe Classic",

    navigations: "game",
  },
  {
    id: 5,
    imageUrl:
      "https://i.pinimg.com/originals/4d/e6/ea/4de6ea1808c96af78a95cf5104467ed4.gif",
    title: "Which is your number?",
    description: "Guess the number between 1 and 30",
    navigations: "number",
  },
  {
    id: 6,
    imageUrl:
      "https://content.instructables.com/ORIG/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp",
    title: "Guess the number",
    description: "Guess the number between 1 and 30",
    navigations: "number",
  },
  {
    id: 4,
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/523234996/0x0.jpg?format=jpg&width=1200",
    title: "The game",

    navigations: "game",
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--c8x2x_9k--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9652oc9jro68hf5bv3ft.gif",
    title: "Tic tac toe",

    navigations: "game",
  },

  {
    id: 7,
    imageUrl:
      "https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/05/Puzzle_May_2880x1620_Lede.jpg",
    title: "Guess the number",
    description: "Guess the number between 1 and 30",
    navigations: "number",
  },
  {
    id: 8,
    imageUrl:
      "https://content.instructables.com/ORIG/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp",
    title: "Number guessing",
    description: "Guess the number between 1 and 30",
    navigations: "number",
  },
];

export function Dashboard({ navigation }) {
  const [inputValue, setInputValue] = useState("");
  const [initialState, setInitialState] = useState(games);
  const [filteredState, setfilteredState] = useState(games);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 6000);
  });

  useEffect(() => {
    const filteredGames = initialState.filter((data) => {
      return data.title
        .toLocaleLowerCase()
        .includes(inputValue.toLocaleLowerCase());
    });
    if (inputValue !== "") {
      setfilteredState(filteredGames);
    } else {
      setfilteredState(initialState);
    }
  }, [inputValue]);
  return (
    <>
      {!loading ? (
        <SplashScreen />
      ) : (
        <SafeAreaView backgroundColor="black" height="100%">
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 25,
                marginTop: 10,
              }}
            >
              Games
            </Text>

            <View
              style={{
                height: 40,
                width: "100%",
                backgroundColor: "gray",
                marginTop: 30,
                marginBottom: 10,
                borderRadius: 15,
              }}
            >
              <TextInput
                placeholder="Search"
                paddingLeft={30}
                height={40}
                clearButtonMode
                paddingRight={30}
                onChangeText={(value) => setInputValue(value)}
              />
            </View>
          </View>
          <ScrollView
            backgroundColor="black"
            height="100%"
            style={{ marginRight: 15, marginLeft: 25 }}
          >
            <StatusBar barStyle={"light-content"} />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 100,
                marginTop: 60,
              }}
            >
              {filteredState.length > 0 ? (
                <GameCard navigation={navigation} gamesData={filteredState} />
              ) : (
                <Text style={{ color: "white", fontSize: 15 }}>
                  Nu sa gasit nimic!
                </Text>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
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
