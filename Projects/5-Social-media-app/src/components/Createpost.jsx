import React, { useContext, useRef } from "react";
import { PostContext } from "../contexts/PostlistsProvide";

function CreatePost({}) {
  //consume addpost context
  const { addPost } = useContext(PostContext);
  /////////////////====================////////////////
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();
  const useridElement = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split("");
    const userid = useridElement.current.value;
    addPost(title, body, reaction, tags, userid);
  };

  return (
    <form className="createPost" onSubmit={handelSubmit}>
      {/* Title */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          <i>Title</i>
        </label>
        <input
          type="text"
          className="form-control"
          ref={titleElement}
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
          ref={bodyElement}
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
          ref={reactionElement}
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
          ref={useridElement}
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
          ref={tagsElement}
          id="tag"
          placeholder="Give a asethetic tag in ur post 😶‍🌫️"
        />
      </div>

      {/* submit button */}
      <button type="submit" className="btn btn-outline-warning mt-3">
        <i>Submit</i>
      </button>
    </form>
  );
}

export default CreatePost;
