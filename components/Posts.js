import React from "react";
import { Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../constants";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";
import Card from "./Card";

export default function Posts({ posts, users }) {
  const navigation = useNavigation();
  const gotoPostDetails = (post) => navigation.navigate("Post", { post });

  const renderItem = ({ item }) => {
    const user = users.find((user) => user.id === item.userId);
    const name = user ? user.name : "No Name";
    const title = item.title ? capitalizeFirstLetter(item.title) : "No Title";
    return (
      <TouchableOpacity onPress={() => gotoPostDetails(item)}>
        <Card>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.name}>
            {`${item.id}. ${name}`}
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  };

  if (!posts || !posts.length) return null;
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 32 }}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
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
