// PostlistProvider.jsx
import React, { createContext, useReducer } from "react";

// creating new context
export const PostContext = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
});

// reducer function
const reducer = (currState, action) => {
  let newState = currState;

  //newstate will keep that post which id will not match with action.payload.id
  if (action.type === "DELETE_POST") {
    newState = currState.filter((item) => item.id !== action.payload.id);
  } else if (action.type === "ADD_Post") {
    newState = [action.payload, ...currState];
  }

  return newState;
};

// Dummy Data
const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "going to mumbai",
    body: "Hi friends i am ankita going to mumbai for my study",
    reaction: 9,
    userId: "user-9",
    tags: ["mumbai", "study"],
  },
  {
    id: 2,
    title: "graduating from college",
    body: "After 4 years of relationship i am finally marrying to Ananya",
    reaction: 15,
    userId: "user-10",
    tags: ["relationship", "marriage", "love"],
  },
];

// function within which we declared provider and useReducer
const PostlistProvider = ({ children }) => {
  const [postListState, dispatch] = useReducer(reducer, DEFAULT_POST_LIST);

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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostlistProvider;
