import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './VideoTestimonials.module.css';
import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';
import person4 from '../../assets/person4.png';
import play from '../../assets/play.png';
import audio from '../../assets/audio.png';
import testimonial1 from '../../assets/videos/testimonial1.mp4';

const data = [
    { image: person1, name: "This Kumar", designation: "CEO, Street Smart 222" },
    { image: person2, name: "That Kumari", designation: "CEO, Be Bee 444" },
    { image: person3, name: "Those Kumar", designation: "Co Founder, Smart 555" },
    { image: person4, name: "These Kumari", designation: "Co Founder, To For 666" },
];

const VideoTestimonials = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Real Stories, Real Impact: Our Users Share Their Experience
            </h1>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{ delay: 2500, disableOnInteraction: true, pauseOnMouseEnter: true }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className={styles.slide}>

                    <div className={styles.card}>
                        {/* <img src={item.image} alt={item.name} className={styles.image} />
                        <div className={styles.overlayPlayIcon}>
                            <img src={play} alt="Play" className={styles.playIcon} />
                        </div>
                        <div className={styles.overlayAudioIcon}>
                            <img src={audio} alt="audio" className={styles.audioIcon} />
                        </div> */}
                        <video src={testimonial1} className={styles.video} controls poster={item.image}/>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.designation}>{item.designation}</p>
                    </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VideoTestimonials;
