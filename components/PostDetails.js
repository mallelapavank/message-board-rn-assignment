import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";
import Comments from "./Comments";
import { deletePostAndComments } from "../api";

export default function PostDetails({ post, comments }) {
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const deletePost = () => {
    setLoading(true);
    const commentIds = comments.map((comment) => comment.id);
    deletePostAndComments(post.id, commentIds)
      .then((response) => {
        if (response && response.status === 200) {
          navigation.goBack();
        }
      })
      .finally(() => setLoading(false));
  };

  const renderDeleteOption = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color="#00ff00"
          style={{ alignSelf: "flex-end" }}
        />
      );
    }
    return (
      <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={deletePost}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderDeleteOption()}
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
