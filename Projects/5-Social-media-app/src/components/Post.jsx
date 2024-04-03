import React, { useContext } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../contexts/PostlistsProvide";

/////////////////////==============///////////////////////

function Post({ id, title, body, tags }) {
  //calling function for delete post
  const { removePost } = useContext(PostContext);

  return (
    <div
      className="card cardPose col-lg-6 mx-3 my-3 ml"
      style={{ width: "23rem", maxHeight: "800px" }}
    >
      {/* You can use the post data to fill in the card */}
      <div className="card-body">
        <h2
          className="card-title"
          style={{
            fontSize: "1rem",
            fontWeight: "bolder",
            fontVariant: "common-ligatures",
          }}
        >
          {title.toUpperCase()}
          <span className="delete">
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                removePost(id);
              }}
            >
              <MdDelete />
            </button>
          </span>
        </h2>
        <p className="card-text" style={{ fontSize: "larger" }}>
          {body}
        </p>
        <ul style={{ listStyle: "none" }}>
          {/* Assuming tags is an array */}
          {tags.map((tag, index) => (
            <li
              key={index}
              style={{ display: "inline-block", marginRight: "5px" }}
            >
              <span className="badge text-bg-info m-2">
                #{tag.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-outline-warning m-3">
          <BiSolidLike /> 99
        </button>
        <button type="button" className="btn btn-outline-success m-3">
          <FaCommentAlt /> 13
        </button>
        <button type="button" className="btn btn-outline-info m-3">
          <FaShare /> 11
        </button>
      </div>
    </div>
  );
}

export default Post;
