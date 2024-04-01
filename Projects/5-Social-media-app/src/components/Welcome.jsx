import React from "react";

function Welcome({getPost}) {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-2"
        src="./s.svg"
        alt=""
        width="95"
        height="75"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">Welcome To Secrete </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quaerat consequuntur eaque quisquam quasi facilis necessitatibus, ad molestiae eum, enim ullam repellendus.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            fdprocessedid="nbygdm9"
            onClick={getPost}
          >
            See Secrete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
