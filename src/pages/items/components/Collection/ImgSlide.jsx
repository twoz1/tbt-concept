import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from "swiper";

// import required modules
import { Pagination } from 'swiper';

export default function ImgSlide() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination , Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false, }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='image_slide_1' src={require('../../images/sfdlkajsfklasjfdksadf.jpeg')} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='image_slide_1' src={require('../../images/glassesBanner.jpg')} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='image_slide_1' src={require('../../images/collection.jpg')} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='image_slide_1' src={require('../../images/result_banner1.jpg')} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
