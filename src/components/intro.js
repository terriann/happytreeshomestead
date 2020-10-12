import React from "react";
import "./intro.scss";

function Intro() {
  return (
    <div className="intro py-2 py-md-4 py-lg-5">
      <div className="container">
        <div className="col-10 col-md-8 mx-auto">
          <p className="py-1 py-md-2 text-center">
            Established in 2018, Happy Trees Homestead is the name we gave to a
            place that we are raising our food. It looks great on the homemade
            labels we use on our canned goods.
          </p>

          <p className="py-1 py-md-2 text-center">
            We are a private residence. We are not a goods-for-sale homestead.
          </p>

          <p className="py-1 py-md-2 text-center">
            Our goals this year include: growing our skills in self-sufficiency
            through gardening, raising animals, preserving, hunting, foraging,
            eating well &amp; living a good life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
