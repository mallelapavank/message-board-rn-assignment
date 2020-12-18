import React from "react";
import { fetchPostComments } from "../api";
import PostDetails from "../components/PostDetails";
import capitalizeFirstLetter from "../util/capitalizeFirstLetter";

export default function PostDetailsScreen(props) {
  const [comments, setComments] = React.useState([]);
  const post = props.route.params?.post ?? null;
  console.log("props", props);

  React.useEffect(() => {
    fetchPostComments(post.id).then((data) => setComments(data));
    props.navigation.setOptions({ title: capitalizeFirstLetter(post.title) });
  }, []);

  return <PostDetails post={post} comments={comments} />;
}
