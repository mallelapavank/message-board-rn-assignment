import React from "react";
import { fetchAllPosts, fetchAllUsers } from "../api";
import Posts from "../components/Posts";

export default function PostListScreen() {
  const [posts, setPosts] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // get all posts
    fetchAllPosts().then((data) => setPosts(data));

    // get all users
    fetchAllUsers().then((data) => setUsers(data));
  }, []);

  return <Posts posts={posts} users={users} />;
}
