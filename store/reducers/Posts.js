import { SET_POSTS, ADD_COMMENT } from "../actions/posts";

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        posts: action.posts,
      };
    case ADD_COMMENT:
      const postIndex = state.posts.findIndex((post) => post.id === action.postId);
      const updatedPost = state.posts.find((post == post.id) == action.postId);
      updatedPost.comments.push(newComment);
      const updatedPosts = [...state.posts];
      updatedPost[postIndex] = updatedPost;

      return {
        posts: updatedPosts,
      };
  }
  return state;
};
