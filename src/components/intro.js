import React from "react";
import "./intro.scss";

function Intro() {
  return (
    <div className="intro py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <p className="py-3 text-center">
              Established in 2018, Happy Trees Homestead is the name we gave to
              a place that we are raising our food.
            </p>

            <p className="py-3 text-center">
              We are a private residence. We are not a goods-for-sale homestead.
            </p>

            <p className="py-3 text-center">
              Our goals this year include: growing our skills in
              self-sufficiency through gardening, raising animals, preserving,
              hunting, foraging, eating well &amp; living a good life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
