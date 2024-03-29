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
  {
    id: 3,
    title: "graduating from college",
    body: "After 4 years of relationship i am finally marrying to Ananya",
    reaction: 15,
    userId: "user-10",
    tags: ["relationship", "marriage", "sex"],
  },
  {
    id: 4,
    title: "graduating from college",
    body: "After 4 years of relationship i am finally marrying to Ananya",
    reaction: 15,
    userId: "user-10",
    tags: ["relationship", "marriage"],
  },
  {
    id: 5,
    title: "graduating from college",
    body: "After 4 years of relationship i am finally marrying to Ananya",
    reaction: 15,
    userId: "user-10",
    tags: ["relationship", "marriage"],
  },
];

// function within which we declared provider and useReducer
const PostlistProvider = ({ children }) => {
  const [postListState, dispatch] = useReducer(reducer, DEFAULT_POST_LIST);
  const addPost = () => {};

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
