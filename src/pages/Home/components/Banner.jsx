import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import banner from '../../../assets/image/banner/b (1).png'
import banner1 from '../../../assets/image/banner/b (2).png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 12300, disableOnInteraction: false }}
            loop={true}
            speed={1900}
            spaceBetween={24}
            slidesPerView={1}
            className="h-full"
        >
            <SwiperSlide className="h-full">
                <img src={banner} alt="Banner 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide className="h-full">
                <img src={banner1} alt="Banner 2" className="w-full h-full  object-cover" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner