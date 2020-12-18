import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";
import Card from "./Card";
import Heading from "./Heading";

export default function Comments({ comments }) {
  return (
    <View style={styles.conatiner}>
      <Heading text={`Comments (${comments.length})`} />
      {comments.map((comment) => {
        return (
          <Card key={comment.id}>
            <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
              {comment.email}
            </Text>
            <Text>{capitalizeFirstLetter(comment.body)}</Text>
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 16,
  },
  name: {
    color: colors.darkGrey,
    marginBottom: 8,
  },
});
