import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { colors } from "../constants";

export default function Card(props) {
  return <View style={styles.cardContainer}>{props.children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 16,
    margin: 16,
    marginBottom: 0,
    backgroundColor: colors.white,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: "rgba(0,0,0, 0.2)",
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
});
