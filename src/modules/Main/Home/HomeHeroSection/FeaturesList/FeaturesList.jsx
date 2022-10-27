import React from "react";

import { ReactComponent as RestaurantReviewIcon } from "assets/icons/HomeHeroSection/restaurantReview.svg";
import { ReactComponent as MapTagsIcon } from "assets/icons/HomeHeroSection/mapTags.svg";
import { ReactComponent as QrCodeIcon } from "assets/icons/HomeHeroSection/qrCode.svg";
import { ReactComponent as BonusPointsIcon } from "assets/icons/HomeHeroSection/bonusPoints.svg";

import "./FeaturesList.scss";

const FeaturesList = () => {
  return (
    <>
      <h2 className="features__title">
        We are the first of our kind! Here you can find
      </h2>
      <ul className="features__list">
        <li className="features__item">
          <RestaurantReviewIcon />
          <div>
            <h3 className="features__sub-title">Restaurant Review</h3>
            <p className="features__description">
              Get best tips from our users and Choicie
            </p>
          </div>
        </li>
        <li className="features__item">
          <MapTagsIcon />
          <div>
            <h3 className="features__sub-title">Map with Restaurant Tags</h3>
            <p className="features__description">
              Make simple selection by your criteria
            </p>
          </div>
        </li>
        <li className="features__item">
          <QrCodeIcon />
          <div>
            <h3 className="features__sub-title">QR Code Menu</h3>
            <p className="features__description">
              Use fast and convenient way to create orders
            </p>
          </div>
        </li>
        <li className="features__item">
          <BonusPointsIcon />
          <div>
            <h3 className="features__sub-title">Bonus Points for Clients</h3>
            <p className="features__description">
              Spend it and get free drinks and dishes
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default FeaturesList;
