import React from "react";

function Render({}) {
  return (
    <div className="px-4 py-5 my-3 text-center">
      <img
        className="d-block mx-auto mb-2"
        src="./s.svg"
        alt=""
        width="95"
        height="75"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome To Counter{" "}
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          quaerat consequuntur eaque quisquam quasi facilis necessitatibus, ad
          molestiae eum, enim ullam repellendus.
        </p>
        <img
        className="d-block mx-auto mb-2"
        src="./joker.svg"
        alt=""
        width="200"
        height="150"
      />
      </div>
    </div>
  );
}

export default Render;
