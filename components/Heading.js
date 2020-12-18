import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants";

export default function Heading({ text }) {
  return (
    <View>
      <Text style={styles.headingText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    color: colors.darkGrey,
    paddingVertical: 8,
  },
});
