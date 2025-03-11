import React from 'react'
import styles from "./landingPage.module.css";
import Appbar from '../../components/Appbar/Appbar';
import HeroImage from '../../components/HeroImage/HeroImage';
import PricingBanner from '../../components/PricingBanner/PricingBanner';
import Footer from '../../components/Footer/Footer';
import RotatingSection from '../../components/RotatingSection/RotatingSection';
import ScrollSection from '../../components/ScrollSection/ScrollSection';
import VideoTestimonials from '../../components/VideoTestimonials/VideoTestimonials';


const LandingPage = () => {
    return (
        <div >
           <Appbar/>
           <HeroImage/>
           <PricingBanner/>
           <RotatingSection />
           <ScrollSection />
           <VideoTestimonials />
           <Footer />
        </div>
    )
}

export default LandingPage