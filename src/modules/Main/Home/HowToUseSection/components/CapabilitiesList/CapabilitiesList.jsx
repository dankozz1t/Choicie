import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, A11y } from "swiper";

import { ReactComponent as ScanForeignLangIcon } from "assets/icons/HowToUseSection/01_scanForeignLang.svg";
import { ReactComponent as AutomaticallyTranslatedIcon } from "assets/icons/HowToUseSection/02_automaticallyTranslated.svg";
import { ReactComponent as ScanForOrderIcon } from "assets/icons/HowToUseSection/03_scanForOrder.svg";
import { ReactComponent as ShareIcon } from "assets/icons/HowToUseSection/04_share.svg";

import { ReactComponent as One1Icon } from "assets/icons/HowToUseSection/number-01.svg";
import { ReactComponent as Two2Icon } from "assets/icons/HowToUseSection/number-02.svg";
import { ReactComponent as Three3Icon } from "assets/icons/HowToUseSection/number-03.svg";
import { ReactComponent as Four4Icon } from "assets/icons/HowToUseSection/number-04.svg";

import "swiper/scss";
import "swiper/scss/autoplay";

import "./CapabilitiesList.scss";

const CapabilitiesList = ({ isDesktop }) => {
  if (isDesktop) {
    return (
      <ul className="capabilities__list">
        <li className="capabilities__item">
          <ScanForeignLangIcon />
          <h3 className="capabilities__title">
            Scan the QR-code on the foreign language menu.
          </h3>
        </li>
        <li className="capabilities__item">
          <AutomaticallyTranslatedIcon />
          <h3 className="capabilities__title">
            Automatically get to the online version of menu — it will be
            translated into your native language.
          </h3>
        </li>
        <li className="capabilities__item">
          <ScanForOrderIcon />
          <h3 className="capabilities__title">
            Choose and order one or more dishes you like, then show your QR-code
            from Choicie to the waiter.
          </h3>
        </li>
        <li className="capabilities__item">
          <ShareIcon />
          <h3 className="capabilities__title">
            Share your impressions, tips, and ratings to help other Choicie
            users.
          </h3>
        </li>
      </ul>
    );
  }

  return (
    <Swiper
      modules={[Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1.35}
      autoplay
      scrollbar={{ draggable: true, dragSize: 52 }}
    >
      <SwiperSlide>
        <ScanForeignLangIcon />
        <h3 className="capabilities__title">
          Scan the QR-code on the foreign language menu.
        </h3>
        <One1Icon className="capabilities__number" />
      </SwiperSlide>
      <SwiperSlide>
        <AutomaticallyTranslatedIcon />
        <h3 className="capabilities__title">
          Automatically get to the online version of menu — it will be
          translated into your native language.
        </h3>
        <Two2Icon className="capabilities__number" />
      </SwiperSlide>
      <SwiperSlide>
        <ScanForOrderIcon />
        <h3 className="capabilities__title">
          Choose and order one or more dishes you like, then show your QR-code
          from Choicie to the waiter.
        </h3>
        <Three3Icon className="capabilities__number" />
      </SwiperSlide>
      <SwiperSlide>
        <ShareIcon />
        <h3 className="capabilities__title">
          Share your impressions, tips, and ratings to help other Choicie users.
        </h3>
        <Four4Icon className="capabilities__number " />
      </SwiperSlide>
      <span slot="container-end" className="slider--margin-bot"></span>
    </Swiper>
  );
};

CapabilitiesList.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default CapabilitiesList;
