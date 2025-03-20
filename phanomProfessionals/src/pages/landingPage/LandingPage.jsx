import React from 'react'
import styles from "./landingPage.module.css";
import Appbar from '../../components/Appbar/Appbar';
import HeroImage from '../../components/HeroImage/HeroImage';
import PricingBanner from '../../components/PricingBanner/PricingBanner';
import Footer from '../../components/Footer/Footer';
import RotatingSection from '../../components/RotatingSection/RotatingSection';
import ScrollSection from '../../components/ScrollSection/ScrollSection';
import VideoTestimonials from '../../components/VideoTestimonials/VideoTestimonials';
import Features from '../../components/Features/Features';
import Blogs from '../../components/Blogs/Blogs';
import Achievements from '../../components/Achievements/Achievements';
import DigitalMarketing from '../../components/DigitalMarketing/DigitalMarketing';
import MissionSection from '../../components/MissionSection/MissionSection';


const LandingPage = () => {
    return (
        <div >
           <Appbar/>
           <HeroImage/>
           <Achievements />
           <DigitalMarketing />
           <PricingBanner/>
           <RotatingSection />
           <ScrollSection />
           <Features />
           <MissionSection />
           <VideoTestimonials />
           <Blogs/>
           <Footer />
        </div>
    )
}

export default LandingPage