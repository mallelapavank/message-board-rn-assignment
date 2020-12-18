export const fetchAllPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error("Cannot fetch posts");
    });
};

export const fetchAllUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error("Cannot fetch users");
    });
};

export const fetchPostComments = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error("Cannot fetch comments");
    });
};

export const deletePostAndComments = async (postId, commentIds) => {
  let deleteCommentsArray = [];
  commentIds.forEach(async (commentId) => {
    const commentResponse = fetch(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );
    deleteCommentsArray.push(commentResponse);
  });
  const commentsResonse = await Promise.all(deleteCommentsArray);
  const errorResponse = commentsResonse.map((res) => res.status).includes(404);
  if (!errorResponse) {
    try {
      const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "DELETE",
        }
      );
      return postResponse;
    } catch (error) {
      throw (new Error("Could not delete post"), postId);
    }
  }
};
