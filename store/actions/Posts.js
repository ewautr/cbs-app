import Post from "../../models/Post";

export const SET_POSTS = "SET_POSTS";
export const ADD_COMMENT = "ADD COMMENT";

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

        // if (errorId === "EMAIL_EXISTS") {
        //   message = "Email already exists";
        // }
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

      console.log(loadedPosts);

      dispatch({ type: SET_POSTS, posts: loadedPosts });
    } catch (error) {
      throw error;
    }
  };
};

// export const addComment = (newComment, postId) => {
//   return async (dispatch, getState) => {
//     const post = getState().posts.filter((post) => post.id == postId);
//     post.comments.push(newComment);

//     try {
//       const response = await fetch(`https://cbs-app-fd9da-default-rtdb.firebaseio.com/posts/${postId}.json`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(post),
//       });
//       if (!response.ok) {
//         const errorResponseData = await response.json();
//         const errorId = errorResponseData.error.message;
//         let message = "Something went wrong";

//         // if (errorId === "EMAIL_EXISTS") {
//         //   message = "Email already exists";
//         // }
//         console.log(errorId);

//         throw new Error(message);
//       }
//       const responseData = await response.json();
//       console.log(responseData);
//       dispatch({ type: ADD_COMMENT, newComment: newComment, postId: postId });
//     } catch (error) {
//       throw error;
//     }
//   };
// };
