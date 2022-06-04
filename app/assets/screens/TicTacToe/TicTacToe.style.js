import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  tableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tableRow: {
    borderColor: "black",
    borderWidth: 1,
    height: 90,
    width: 90,
    margin: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
  },
  textContent: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 20,
  },
});
