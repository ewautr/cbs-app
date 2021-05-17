import Post from "../../models/Post";

export const SET_POSTS = "SET_POSTS";
export const ADD_COMMENT = "ADD_COMMENT";

export const fetchPosts = () => {
  return async (dispatch) => {
    // const userId = "u1";
    try {
      // async code can be done here
      const response = await fetch("https://cbs-app-fd9da-default-rtdb.firebaseio.com/posts.json");
      if (!response.ok) {
        const errorResponseData = await response.json();
        const errorId = errorResponseData.error.message;
        let message = "Something went wrong";

        console.log(errorId);

        throw new Error(message);
      }
      const responseData = await response.json();
      const loadedPosts = [];

      for (const key in responseData) {
        loadedPosts.push(
          new Post(
            key,
            responseData[key].authorName,
            responseData[key].authorImageUrl,
            responseData[key].title,
            new Date(responseData[key].date),
            responseData[key].body,
            responseData[key].category,
            responseData[key].imageUrl,
            responseData[key].likes,
            responseData[key].comments
          )
        );
      }

      dispatch({ type: SET_POSTS, posts: loadedPosts });
    } catch (error) {
      throw error;
    }
  };
};

export const addComment = (newComment, postId) => {
  return async (dispatch, getState) => {
    try {
      // get all posts from the state
      const posts = getState().posts.posts;

      // find post we are editing, get comments array and add a new comment to it
      const post = posts.find((post) => post.id == postId);
      post.comments.push(newComment);
      const jComments = JSON.stringify({ comments: post.comments });

      const response = await fetch(`https://cbs-app-fd9da-default-rtdb.firebaseio.com/posts/${postId}.json`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: jComments,
      });
      if (!response.ok) {
        const errorResponseData = await response.json();
        const errorId = errorResponseData.error.message;
        let message = "Something went wrong";

        console.log("response is not ok");
        throw new Error(message);
      }
      // dispatch({ type: ADD_COMMENT, newComment: newComment, postId: postId });
    } catch (error) {
      throw error;
    }
  };
};
