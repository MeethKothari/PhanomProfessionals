import React, { useState, useEffect } from 'react';
import styles from './HeroImage.module.css';
import heroImage1 from '../../assets/heroImage1.png';
import heroImage2 from '../../assets/heroImage2.png';
import heroImage3 from '../../assets/heroImage3.png';
import heroImage4 from '../../assets/heroImage4.png';

const HeroImage = () => {
    const images = [heroImage1, heroImage2, heroImage3, heroImage4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); // Start fade-in after changing image
            }, 500); // Duration of fade-out
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className=' text-4xl'><span className={styles.text}>Let's innovation</span> meets your <br />excellence</h1>
                <h2 className=' text-2xl'>Excellence refined, innovation ignited, the future <br />starts here</h2>
                <button className={styles.btn}>Book an Appointment</button>
            </div>

            <div className={styles.imageContainer}>
                <img 
                    src={images[currentIndex]} 
                    className={`${styles.image} ${fade ? styles.fadeIn : styles.fadeOut}`} 
                    alt="Hero"
                />
            </div>
        </div>
    );
}

export default HeroImage;
