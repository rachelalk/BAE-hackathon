import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Carousel = () => {
	return (
		<Swiper
			className="carousel"
			spaceBetween={10}
			slidesPerView={1.3}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide className="slide">
				<div className="swiper-box">
					<div className="swiper-image">
						<img
							className="carousel-image"
							alt="light through trees"
							src="./insights.jpg"
						/>
					</div>
					<div className="swiper-margin"></div>
					<h3 className="swiper-text"> Insights </h3>
				</div>
			</SwiperSlide>
			<SwiperSlide className="slide">
				<div className="swiper-box">
					<div className="swiper-image">
						<img
							className="carousel-image"
							alt="light through trees"
							src="./insights.jpg"
						/>
					</div>
					<div className="swiper-margin"></div>
					<h3 className="swiper-text"> Insights </h3>
				</div>
			</SwiperSlide>
			<SwiperSlide className="slide">
				<div className="swiper-box">
					<div className="swiper-image">
						<img
							className="carousel-image"
							alt="light through trees"
							src="./insights.jpg"
						/>
					</div>
					<div className="swiper-margin"></div>
					<h3 className="swiper-text"> Insights </h3>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default Carousel;
