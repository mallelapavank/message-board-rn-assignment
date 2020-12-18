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
