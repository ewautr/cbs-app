import { SET_POSTS, ADD_COMMENT, LIKE_COMMENT } from "../actions/posts";

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log("hi from reducer");
      const postIndex = state.posts.findIndex((post) => post.id === action.postId);
      const updatedPost = state.posts.find((post == post.id) == action.postId);
      updatedPost.comments.push(newComment);
      const updatedPosts = [...state.posts];
      updatedPost[postIndex] = updatedPost;

      return {
        posts: updatedPosts,
      };
    case LIKE_COMMENT:
      console.log("like comment reducer");
    case SET_POSTS:
      return {
        posts: action.posts,
      };
    default:
      return state;
  }
};
