import React from "react";
import Container from "shared/components/Container";

import reviewImage from "assets/images/ReviewSection/photo-desktop@1x.png";

import "./ReviewSection.scss";

const ReviewSection = () => {
  return (
    <section className="review">
      <Container className="review__container">
        <img
          className="review__image"
          src={reviewImage}
          alt="Women in white dress"
        />
        <div className="review__info-box">
          <div className="review__left-block">
            <h2 className="review__title">
              Our restaurant becomes more popular after joining Choicie!
            </h2>
            <p className="review__description">
              We started using Choicie quite recently. We adjusted our menu and
              increased the restaurant’s revenue thanks to live feedback.
            </p>
            <p className="review__description review__description--margin-top">
              <strong>Nelly Spender</strong> — Restaurant name
            </p>
          </div>

          <div className="review__right-block">
            <h2 className="review__title">+ 40%</h2>
            <p className="review__description">
              The restaurant’s revenue increased due to menu adjustments, as
              well as lower grocery costs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewSection;
