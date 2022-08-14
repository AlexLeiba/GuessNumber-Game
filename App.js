import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "./app/assets/screens/Dashboard";
import { GuessNumber } from "./app/assets/screens/GuessNumber";
import { TicTacToe } from "./app/assets/screens/TicTacToe";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="name"
          component={Dashboard}
          options={{ title: "Dashboard", headerShown: false }}
        />
        <Stack.Screen
          name="number"
          component={GuessNumber}
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
