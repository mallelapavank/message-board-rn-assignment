import React from "react";
import { View, StyleSheet } from "react-native";
import Posts from "../components/Posts";

export default function PostsScreen() {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // get all posts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

    // get all users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <View style={styles.container}>
      <Posts posts={posts} users={users} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});
