import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination } from 'swiper';

export default function ImgSlide() {
    return (
        <>
            <Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img className="image_slide_1" src={'./images/sfdlkajsfklasjfdksadf.jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image_slide_1" src={'./images/glassesBanner.jpg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image_slide_1" src={'./images/collection.jpg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="image_slide_1" src={'./images/result_banner1.jpg'} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
