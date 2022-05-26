// Libraries
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";

// Data
import { sliderData } from "./sliderData";

// CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import style from "./Slider.module.scss";

const Slider = (props) => {
	return (
		<Swiper
			navigation={true}
			loop
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			pagination={{
				type: "bullets",
				clickable: true,
			}}
			effect="fade"
			modules={[Autoplay, Pagination, EffectFade]}
			className={`${style.slider}`}
		>
			{sliderData.length > 0 &&
				sliderData.map((slideImage) => (
					<SwiperSlide key={uuidv4()} className={`cursor-grab`}>
						<img src={slideImage} alt="Slider" className="w-full" />
					</SwiperSlide>
				))}
		</Swiper>
	);
};

export default Slider;
