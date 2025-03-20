import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import achievement1 from '../../assets/achievement1.png';
import achievement2 from '../../assets/achievement2.png';
import achievement3 from '../../assets/achievement3.png';
import achievement4 from '../../assets/achievement4.png';
import achievement5 from '../../assets/achievement5.png';

const Achievements = () => {
    return (
        <>
            <div className=" w-[100%] my-7 flex justify-center items-center">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    speed={4000}
                    autoplay={{ delay: 0, disableOnInteraction: true, pauseOnMouseEnter: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    // className="mx-auto"
                >
                    <SwiperSlide><img src={achievement1} alt='achievement' /></SwiperSlide>
                    <SwiperSlide><img src={achievement2} alt='achievement' /></SwiperSlide>
                    <SwiperSlide><img src={achievement3} alt='achievement' /></SwiperSlide>
                    <SwiperSlide><img src={achievement4} alt='achievement' /></SwiperSlide>
                    <SwiperSlide><img src={achievement5} alt='achievement' /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Achievements;