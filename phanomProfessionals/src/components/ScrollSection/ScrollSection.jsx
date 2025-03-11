import React from 'react';
import styles from './ScrollSection.module.css';
import icon1 from '../../assets/icon1.png';
import icon2 from "../../assets/icon2.png";



const ScrollSection = () => {
  return (
    <div className={styles.container}>

      <section className={styles.leftSide}>
          <h1 className=' font-bold font-poppins text-4xl text-opacity-80 text-purple-700'>What makes Us Unique?</h1>
          <p className=' text-xl'> At Phanom Professionals, we don’t just offer services; we innovate, create, and lead with excellence. Our unique and forward-thinking approach sets us apart in the highly competitive world of marketing and IT services. As a leading digital marketing agency in India, we are committed to delivering transformative solutions that drive growth, inspire engagement, and establish lasting success for our clients.</p>
          <button className={styles.btn}>Book an Appointment</button>
      </section>


      <section className={styles.rightSide}>
        <div className={styles.cardContainer}>
        
          <div className={styles.card}>
            <img src={icon1}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Holistic Solutions</h3>
              <p>We provide end-to-end services that address all aspects of your needs, ensuring seamless integration and effective results.</p>
            </div>
          </div>


          <div className={styles.card}>
            <img src={icon2}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Client-Centric Approach</h3>
              <p>Your goals and satisfaction are our top priorities, driving us to craft tailored solutions that align seamlessly with your vision and exceed expectations.</p>
            </div>
          </div>


          <div className={styles.card}>
            <img src={icon1}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Innovative Thinking</h3>
              <p>Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing  quality, innovative solutions, and outstanding results in every project we undertake.</p>
            </div>
          </div>


          <div className={styles.card}>
            <img src={icon2}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Expert Team</h3>
              <p>Our team consists of highly skilled professionals with diverse expertise, dedicated to delivering the highest quality of work and consistently exceeding expectations.</p>
            </div>
          </div>


          <div className={styles.card}>
            <img src={icon1}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Cutting-Edge Technology</h3>
              <p>We leverage the latest tools and technologies to stay ahead of industry trends and deliver modern solutions.</p>
            </div>
          </div>


          <div className={styles.card}>
            <img src={icon2}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Commitment to Excellence</h3>
              <p>Our dedication to quality and continuous improvement ensures outstanding results and long-term client satisfaction.</p>
            </div>
          </div>


          <div className={styles.card}>
            <img src={icon1}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Customized Strategies</h3>
              <p>We understand that every client is unique, so we design personalized strategies to meet specific goals and challenges.</p>
            </div>
          </div>


          <div className={styles.card}>
            <img src={icon2}/>
            <div>
              <h3 className=' text-2xl mb-2 font-bold'>Sustainable Practices</h3>
              <p>We prioritize solutions that are not only effective but also environmentally and socially responsible.</p>
            </div>
          </div>
          

        </div>
      </section>

    </div>
  )
}

export default ScrollSection