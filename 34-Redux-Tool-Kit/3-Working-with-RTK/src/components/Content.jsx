import React from "react";
import Controls from "./Controls";
import { useSelector } from "react-redux";

function Content({}) {
  //to update the value in counter when something changes
  const counterval = useSelector((state) => state.counterxyz.counters);

  return (
    <div className="px-4 py-5 my-5 text-center">
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
        <p className="lead mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          quaerat consequuntur eaque quisquam quasi facilis necessitatibus, ad
          molestiae eum, enim ullam repellendus.
        </p>
        {/* counter value */}
        <i>
          <h3>
            <b>Counter value 😴: {counterval}</b>
          </h3>
        </i>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default Content;
