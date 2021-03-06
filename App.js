import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
//
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

import { Register } from "./app/assets/screens/Register";
import { Home } from "./app/assets/screens/Home";
import { TicTacToe } from "./app/assets/screens/TicTacToe";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="name"
          component={Register}
          options={{ title: "Check your name" }}
        />
        <Stack.Screen
          name="number"
          component={Home}
          options={{ title: "Guess Number" }}
        />
        <Stack.Screen
          name="game"
          component={TicTacToe}
          options={{ title: "Tic Tac Toe", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
