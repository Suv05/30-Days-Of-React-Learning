import React, { useContext } from "react";
import Post from "./Post";
import Welcome from "./Welcome";
import { PostContext } from "../contexts/PostlistsProvide";

function Postlist() {
  // using context to fetch posts from Postlist
  const { posts, showPost } = useContext(PostContext);

  //Define the getPost method
  const handelGetPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) => {
        showPost(res.posts);
      });
  };
  return (
    <>
      {posts.length === 0 && <Welcome getPost={handelGetPost} />}
      <div className="row">
        {posts.map((post) => (
          <Post key={post.id} {...post} /> // assuming you pass all props to Post component
        ))}
      </div>
    </>
  );
}

export default Postlist;
