import React from "react";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as RestaurantReviewIcon } from "assets/icons/HomeHeroSection/restaurantReview.svg";
import { ReactComponent as MapTagsIcon } from "assets/icons/HomeHeroSection/mapTags.svg";
import { ReactComponent as QrCodeIcon } from "assets/icons/HomeHeroSection/qrCode.svg";
import { ReactComponent as BonusPointsIcon } from "assets/icons/HomeHeroSection/bonusPoints.svg";

import { ReactComponent as RestaurantReviewMobileIcon } from "assets/icons/HomeHeroSection/01_mobile-restaurant-review.svg";
import { ReactComponent as QrCodeMenuMobileIcon } from "assets/icons/HomeHeroSection/02_mobile-qr-code-menu.svg";
import { ReactComponent as MapTagsMobileIcon } from "assets/icons/HomeHeroSection/03_mobile-map-tags.svg";
import { ReactComponent as BonusPointsMobileIcon } from "assets/icons/HomeHeroSection/04_mobile-bonus-points.svg";

import "./FeaturesList.scss";

const FeaturesList = () => {
  const isDesktop = useMediaQuery({ minWidth: 1728 });

  return (
    <>
      <h2 className="features__title">
        We are the first of our kind!
        <span className="features__title--span">Here you can find</span>
      </h2>
      {isDesktop ? (
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
      ) : (
        <ul className="features__list">
          <li className="features__item">
            <RestaurantReviewMobileIcon width="44" height="44" />
            <div>
              <h3 className="features__sub-title">Restaurant Review</h3>
              <p className="features__description">
                Get best tips from our users and Choicie
              </p>
            </div>
          </li>
          <li className="features__item">
            <QrCodeMenuMobileIcon width="54" height="54" />
            <div>
              <h3 className="features__sub-title">QR Code Menu</h3>
              <p className="features__description">
                Use fast and convenient way to create orders
              </p>
            </div>
          </li>
          <li className="features__item">
            <MapTagsMobileIcon width="44" height="44" />
            <div>
              <h3 className="features__sub-title">Map with Restaurant Tags</h3>
              <p className="features__description">
                Make simple selection by your criteria
              </p>
            </div>
          </li>
          <li className="features__item">
            <BonusPointsMobileIcon width="44" height="44" />
            <div>
              <h3 className="features__sub-title">Bonus Points for Clients</h3>
              <p className="features__description">
                Spend it and get free drinks and dishes
              </p>
            </div>
          </li>
        </ul>
      )}
    </>
  );
};

export default FeaturesList;
