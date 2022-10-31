import React from "react";
import Container from "shared/components/Container";

import reviewDesktop1xImage from "assets/images/ReviewSection/photo-desktop@1x.png";
import reviewDesktop2xImage from "assets/images/ReviewSection/photo-desktop@2x.png";
import reviewMobileImage from "assets/images/ReviewSection/photo-mobile@1x.png";

import "./ReviewSection.scss";

const ReviewSection = () => {
  return (
    <section className="review">
      <Container className="review__container">
        <picture className="review__picture">
          <source
            srcSet={`${reviewDesktop1xImage} 1x, ${reviewDesktop2xImage} 2x`}
            media="(min-width:1000px)"
          />
          <source
            srcSet={`${reviewMobileImage} 1x`}
            media="(max-width:1000px)"
          />

          <img
            className="review__image"
            src={reviewMobileImage}
            alt="Women in white dress"
          />
        </picture>

        <div className="review__info-box">
          <div className="review__left-block">
            <h2 className="review__title">
              Our restaurant becomes more popular after joining Choicie!
            </h2>
            <p className="review__description">
              We started using Choicie quite recently. We adjusted our menu and
              increased the restaurant’s revenue thanks to live
              <span className="review__description--block"> feedback.</span>
            </p>
            <p className="review__description review__description--margin">
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
