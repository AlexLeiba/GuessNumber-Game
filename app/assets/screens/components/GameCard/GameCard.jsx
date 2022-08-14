import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export function GameCard({ navigation, gamesData }) {
  return (
    <>
      {gamesData.map((data) => {
        return (
          <TouchableOpacity
            style={{
              width: 157,
              height: 130,
              backgroundColor: "gray",
              borderRadius: 15,
              marginBottom: 10,
              marginRight: 10,
            }}
            onPress={() => navigation.navigate(data.navigations)}
          >
            <View key={data.id}>
              <View
                style={{
                  width: "100%",
                  height: 50,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              >
                <Image
                  source={{ uri: data.imageUrl }}
                  resizeMode="cover"
                  style={{
                    height: 80,
                    width: "100%",
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
              </View>
              <View style={{ marginTop: 20, padding: 5 }}>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 15,
                    fontSize: 15,
                  }}
                >
                  {data.title}
                </Text>
                {/* <Text style={{ color: "white" }}>{data.description}</Text> */}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
