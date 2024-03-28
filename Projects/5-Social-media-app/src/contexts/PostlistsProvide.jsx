// PostlistProvider.jsx
import React, { createContext, useReducer } from "react";

// creating new context
export const Postlist = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// reducer function
const reducer = (state, action) => {
  return state;
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
    tags: ["relationship", "marriage","love"],
  },
  {
    id: 2,
    title: "graduating from college",
    body: "After 4 years of relationship i am finally marrying to Ananya",
    reaction: 15,
    userId: "user-10",
    tags: ["relationship", "marriage","sex"],
  },
  {
    id: 2,
    title: "graduating from college",
    body: "After 4 years of relationship i am finally marrying to Ananya",
    reaction: 15,
    userId: "user-10",
    tags: ["relationship", "marriage"],
  },
  {
    id: 2,
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
  const deletePost = () => {};

  return (
    <Postlist.Provider
      value={{
        posts: postListState, // Fix: Change to postListState
        addPost: addPost,
        removePost: deletePost,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

export default PostlistProvider;
