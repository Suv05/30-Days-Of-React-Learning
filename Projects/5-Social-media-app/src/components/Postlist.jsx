import React, { useContext } from "react";
import Post from "./Post";
import { Postlist as PostListData } from "../contexts/PostlistsProvide";

function Postlist() {
  // using context to fetch posts from Postlist
  const { posts } = useContext(PostListData);
  return (
    <>
      <div className="row">
        {posts.map((post) => (
          <Post key={post.id} {...post} /> // assuming you pass all props to Post component
        ))}
      </div>
    </>
  );
}

export default Postlist;
