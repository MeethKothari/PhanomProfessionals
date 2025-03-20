import React from 'react';
import styles from './Features.module.css';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';



let data = [
    {
        title: "Customer Support",
        desc: "Dedicated customer support to assist with any issues or queries, ensuring a smooth and satisfying experience.",
        image: icon1
    },
    {
        title: "Feedback and Ratings",
        desc: "Access to reviews and ratings of freelancers, helping clients make informed decisions based on previous work and client feedback.",
        image: icon2
    },
    {
        title: "Secure Payments",
        desc: "Reliable and secure payment gateways to protect financial transactions and ensure payments are made only when the client is satisfied.",
        image: icon3
    },
    {
        title: "Quick Turnaround",
        desc: "Efficient project management and prompt delivery of services, saving clients time and effort.",
        image: icon1
    },
    {
        title: "Customized Solutions",
        desc: "Experience the power of personalized service with our freelancers, who tailor their solutions to meet your unique needs.",
        image: icon2
    },
    {
        title: "Competitive Pricing",
        desc: "Find the perfect fit for your budget with our competitive pricing",
        image: icon3
    },
    {
        title: "Verified Professionals",
        desc: "you're in good hands with our verified professionals your trusted experts for top-quality work",
        image: icon1
    },
    {
        title: "Wide Range of Services",
        desc: "Unlock a world of possibilities with our diverse pool of talented from digital marketing to web development",
        image: icon2
    },
]



const Features = () => {

    //console.log(data)
    return (
    <>
        <div className={styles.container}>

            {/* <div className={styles.semiCircle}></div> */}


            <h1 className={`text-4xl text-purple-700 font-mono w-[40%] ${styles.text}`}>Why choose us?</h1>


            <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Autoplay]}
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={50}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true} 
                    className={styles.swiper}
                    >
                    {data.map((element, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <div className={styles.slideContent}>
                            <div style={{display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px'}}>
                                <img src={element.image} alt={element.title} className={styles.slideImage}/>
                                <h3 className={styles.slideTitle}>{element.title}</h3>
                            </div>
                            <p className={styles.slideDesc}>{element.desc}</p>
                        </div>
                    </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </div>
    </>
    )
}

export default Features;