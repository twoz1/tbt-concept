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
                    <Link to='/detail/1'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_01.jpg')} /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/detail/7'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_04.jpg')} /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/detail/4'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_02.jpg')} /></Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to='/detail/1'><img className='image_slide_1' src={require('../../../../images/newgoodsBanner_03.jpg')} /></Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}


export default NgoodsSlide;