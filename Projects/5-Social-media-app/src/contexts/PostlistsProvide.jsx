// PostlistProvider.jsx
import React, { createContext, useReducer } from "react";

// creating new context
export const PostContext = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
  showDefaultPost: () => {},
});

// reducer function
const reducer = (currState, action) => {
  let newState = currState;

  //newstate will keep that post which id will not match with action.payload.id
  if (action.type === "DELETE_POST") {
    newState = currState.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "ADD_Post") {
    newState = [action.payload, ...currState];
  } else if (action.type === "SHOW_DEFAULT_POST") {
    newState = action.payload.allPost;
  }

  return newState;
};

// function within which we declared provider and useReducer
const PostlistProvider = ({ children }) => {
  const [postListState, dispatch] = useReducer(reducer, []);

  //implimenting addPost
  const addPost = (title, body, reaction, tags, userid) => {
    dispatch({
      type: "ADD_Post",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reaction: reaction,
        userId: userid,
        tags: tags,
      },
    });
  };

  //implementing show default post
  const showDefaultPost = (item) => {
    dispatch({
      type: "SHOW_DEFAULT_POST",
      payload: {
        allPost: item,
      },
    });
  };

  //implementing deletepost using useReducer
  const deletePost = (id) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        id: id,
      },
    });
  };

  return (
    <PostContext.Provider
      value={{
        posts: postListState, // Fix: Change to postListState
        addPost: addPost,
        removePost: deletePost,
        showPost: showDefaultPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostlistProvider;
