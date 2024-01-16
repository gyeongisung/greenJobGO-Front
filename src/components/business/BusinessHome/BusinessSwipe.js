import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import NoImage from "../../../assets/NoImage.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { SwiperWrapStyle } from "../../../styles/BusinessIntroStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import NoitemBox from "./NoitemBox";

const BusinessSwipe = ({ swiperData, noItem }) => {
  const [swipe, setSwipe] = useState();
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <SwiperWrapStyle>
      <button onClick={() => swipe?.slidePrev()} className="prev-btn">
        <FontAwesomeIcon icon={faAngleLeft} />{" "}
      </button>
      <Swiper
        onBeforeInit={swipper => setSwipe(swipper)}
        modules={[Navigation, Autoplay]}
        slidesPerView={"auto"}
        navigation
        autoplay
        spaceBetween={40}
        className={swiperData.length > 0 ? null : "active"}
      >
        {swiperData?.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {/* <NavLink to={`/${item.productId}`}> */}
            <div className="img">
              <img src={`${item.file}`} alt={item.name} onError={onImgError} />
            </div>
            <div className="txt">
              <p className="name">{item.name} 수강생</p>
              <p className="subject">{item.subjectName}</p>
            </div>
          </SwiperSlide>
        ))}
        {noItem && <NoitemBox />}
      </Swiper>{" "}
      <button onClick={() => swipe?.slideNext()} className="next-btn">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </SwiperWrapStyle>
  );
};

export default BusinessSwipe;
