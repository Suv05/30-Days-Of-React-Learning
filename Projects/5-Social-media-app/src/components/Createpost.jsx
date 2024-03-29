import React, { useRef } from "react";

function CreatePost({}) {
  useRef()
  useRef()
  useRef()
  useRef()
  useRef()
  useRef()
  return (
    <div className="createPost">
      {/* Title */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          <i>Title</i>
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Give a crunchy title to ur post 😘"
        />
      </div>
      {/* post body */}
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          <i>Post</i>
        </label>
        <textarea
          className="form-control"
          placeholder="Post your secreate 🤫"
          id="body"
          rows="5"
        ></textarea>
      </div>

      {/* reaction */}
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          <i>Reaction</i>
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          placeholder="Give others react to ur post 🤓"
        />
      </div>
      {/* userid */}
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          <i>User-Id</i>
        </label>
        <input
          type="text"
          className="form-control"
          id="userid"
          placeholder="Give a sexy User-Id 🫦"
        />
      </div>
      {/* tags */}
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          <i>Tags</i>
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          placeholder="Give a asethetic tag in ur post 😶‍🌫️"
        />
      </div>
    </div>
  );
}

export default CreatePost;
