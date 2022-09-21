import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Style } from "./TicTacToe.style";
import { SplashScreen } from "../../splash/Splash";

export function TicTacToe({ navigation }) {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [WinnerPoint, setWinnerPoint] = useState("");
  const [xWinner, setxWinner] = useState(0);
  const [oWinner, setoWinner] = useState(0);
  const [scoreWinner, setScoreWinner] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  });

  function Cell({ numar }) {
    return (
      <TouchableOpacity
        style={[
          { backgroundColor: winner !== "" ? "#4eba30" : "black" },
          Style.tableRow,
        ]}
        onPress={() => handleClick(numar)}
      >
        <Text style={{ fontSize: 30, color: "white" }}>{cells[numar]}</Text>
      </TouchableOpacity>
    );
  }
  function WinnerCheck(initialArray) {
    let results = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let press in results) {
      results[press].forEach((ArrayResult) => {
        if (
          initialArray[ArrayResult[0]] === "" ||
          initialArray[ArrayResult[1]] === "" ||
          initialArray[ArrayResult[2]] === ""
        ) {
          // do nothing
        } else if (
          initialArray[ArrayResult[0]] === initialArray[ArrayResult[1]] &&
          initialArray[ArrayResult[1]] === initialArray[ArrayResult[2]]
        ) {
          setWinner(`Winner`);
          setWinnerPoint(turn);
          setScoreWinner(!scoreWinner);
        }
      });
    }
  }

  function handleClick(numar) {
    if (cells[numar] !== "") {
      return;
    }
    let initialArray = { ...cells };
    if (turn === "X") {
      initialArray[numar] = "X";
      setTurn("O");
    } else {
      initialArray[numar] = "O";
      setTurn("X");
    }
    setCells(initialArray);
    WinnerCheck(initialArray);
  }

  function handleNewGame() {
    setCells(Array(9).fill(""));
    setWinner("");
  }

  useEffect(() => {
    if (WinnerPoint === "X") {
      const value = xWinner + 1;
      setxWinner(value);
      setTimeout(() => {
        handleNewGame();
      }, 100);
    }
  }, [scoreWinner]);

  useEffect(() => {
    if (WinnerPoint === "O") {
      const value = oWinner + 1;
      setoWinner(value);
      setTimeout(() => {
        handleNewGame();
      }, 100);
    }
  }, [scoreWinner]);

  return (
    <>
      {!loading ? (
        <SplashScreen />
      ) : (
        <View>
          <StatusBar barStyle={"dark-content"} />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
            }}
            testID="Table"
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "800",
                marginBottom: 20,
                bottom: 30,
              }}
            >
              Tic Tac Toe
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                marginBottom: 50,
              }}
            >
              <Text style={{ margin: 10, fontSize: 20 }}>
                Score{" "}
                <Text style={{ color: "green", fontWeight: "800" }}>O:</Text>{" "}
                {WinnerPoint === "O" ? oWinner : oWinner}
              </Text>
              <Text style={{ margin: 10, fontSize: 20 }}>
                Score{" "}
                <Text style={{ color: "red", fontWeight: "800" }}> X:</Text>{" "}
                {WinnerPoint === "X" ? xWinner : xWinner}
              </Text>
            </View>
            <Text
              style={[
                Style.textContent,
                { color: winner !== "" ? "green" : "black" },
              ]}
            >
              {winner === ""
                ? "Game Started"
                : turn === "O"
                ? "Won X"
                : "Won O"}
            </Text>
            <View testID="TBody" style={[, Style.tableContainer]}>
              <View testID="tr">
                <Cell numar={0} />
                <Cell numar={1} />
                <Cell numar={2} />
              </View>
              <View testID="tr2">
                <Cell numar={3} />
                <Cell numar={4} />
                <Cell numar={5} />
              </View>
              <View testID="tr3">
                <Cell numar={6} />
                <Cell numar={7} />
                <Cell numar={8} />
              </View>
            </View>

            {/* button */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 60,
                top: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: winner !== "" ? "green" : "black",
                  width: 150,
                  height: 40,
                  marginRight: 5,
                }}
                onPress={handleNewGame}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 22,
                    color: "white",
                    padding: 5,
                  }}
                >
                  New Game
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: winner !== "" ? "green" : "black",
                  width: 150,
                  height: 40,
                  marginRight: 5,
                }}
                onPress={() => navigation.navigate("name")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 22,
                    color: "white",
                    padding: 5,
                  }}
                >
                  Exit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
