import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { colors } from "../constants";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";
import Card from "./Card";

export default function Posts({ posts, users }) {
  const renderItem = ({ item }) => {
    const name = users[item.userId] ? users[item.userId].name : "No Name";
    const title = item.title ? capitalizeFirstLetter(item.title) : "No Title";
    return (
      <Card>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.name}>
          {`${item.id}. ${name}`}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </Card>
    );
  };

  if (!posts || !posts.length) return null;
  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 32 }}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: colors.darkGrey,
  },
  title: {
    color: colors.black,
    marginTop: 8,
  },
});
