import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../images/'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from "swiper";

// import required modules
import { Pagination } from 'swiper';
import '../../styles/items/NgoodsSlide.css'

const NgoodsSlide = () => {
    return (


        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
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
    )
}

export default NgoodsSlide;

{/* <div className="new_slide_title">
<div className="new_slide_img">
    <a href=""><img src="../new_goods/img/pos_andy_black_crystal_lb_02.jpg" alt="상품사진" /></a>
    <a href="../detailed_page/detailed_page_glass.html"><img src="../new_goods/img/pos_andy_flesh_lb_02.jpg" alt="상품사진" /></a>
    <a href=""><img src="../new_goods/img/pos_etty_black_lb_06.jpg" alt="상품사진" /></a>
</div>
</div> */}