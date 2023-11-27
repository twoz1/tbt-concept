import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from "swiper";

// import required modules
import { Pagination } from 'swiper';
import '../../../../styles/items/NgoodsSlide.css'

const NgoodsSlide = () => {
    return (

        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false, }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to='/detail/Eva%20Crystal%20Violet%20Tint'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_01.jpg')} /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/detail/Tena%20Black'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_04.jpg')} /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/detail/Roan%20Gray%20Cystal'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_02.jpg')} /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/detail/Anton%20Crystal'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_03.jpg')} /></Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}


export default NgoodsSlide;