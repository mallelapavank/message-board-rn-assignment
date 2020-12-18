import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { colors } from "../constants";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";
import Comments from "./Comments";

export default function PostDetails({ post, comments }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{capitalizeFirstLetter(post.body)}</Text>
      <Comments comments={comments} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
  },
});
