import React from 'react'
import styles from './PricingBanner.module.css';
import person from '../../assets/person.png';
import expand from '../../assets/expand.png';
import seo from '../../assets/seo.png';
import os from '../../assets/os.png';


const PricingBanner = () => {
    return (
        <>
            <div className={styles.container}>


                <section className={styles.leftSide}>
                    <img src={person} alt='person' className={styles.image} />
                </section>



                <section className={styles.rightSide}>
                    <div className={styles.content}>
                        <h3>Virtual Private Server</h3>
                        <h1 className={styles.heading}><strong>Flexible, private, and affordable VPS Hosting</strong></h1>


                        <div className={styles.features}>

                            <div className={styles.featureList}> <img src={expand} className={styles.icon} /> <h3>Expand major projects with hardware strategy design options.</h3> </div>
                            <div className={styles.featureList}> <img src={seo} className={styles.icon} /> <h3>Pick Your Dream OS.</h3> </div>
                            <div className={styles.featureList}> <img src={os} className={styles.icon} /> <h3> Maintain Sites and Applications uptime of 99.9%.*</h3> </div>
                            

                            <div className={styles.pricingButton}>
                                <button className={styles.pricingButton}>Get Plans and Pricing →</button>
                                <h3>Buy Fully Managed VPS</h3>
                            </div>

                            <div className={styles.rating}>
                                <div>
                                    <span className={styles.star}>⭐</span>
                                    <span className={styles.star}>⭐</span>
                                    <span className={styles.star}>⭐</span>
                                    <span className={styles.star}>⭐</span>
                                </div>
                                <div>
                                    <h3>4.6 out of 5 stars based on 110,937 reviews</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PricingBanner