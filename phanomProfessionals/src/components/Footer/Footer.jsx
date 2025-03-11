import React from 'react';
import styles from './Footer.module.css';
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";

const Footer = () => {
    return (
        <>
            <footer className={styles.container}>

                <section className={styles.content1}>
                    <h1 className={styles.heading}>Let's make something great together.</h1>
                    <h2 className={styles.title}>Let us know what challenges you are trying to solve so we can help.</h2>
                    <button className={styles.btn}>Join us →</button>
                </section>

                <hr style={{ margin: "40px" }} />


                <section>
                    <div className={styles.content2}>


                        <img src={logo} alt="Phanom Professionals" className={styles.logo} style={{fontWeight:'bolder', height:'50px', width: '120px', cursor: 'pointer'}}/>

                        <div className={styles.linksSection}>
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Hire Indian Talent</li>
                                <li>Our Portfolio</li>
                                <li>Book an Appointment</li>
                            </ul>
                        </div>

                        <div className={styles.socialSection}>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                                <li>Pinterest</li>
                                <li>Twitter</li>
                            </ul>
                        </div>

                        <div className={styles.addressSection}>
                            <h4>Address: </h4>
                            <p>E-193, Third Floor, TDS Tower,<br />Phase 8B, Industrial Area, Sector 74,<br />Sahibzada Ajit Singh Nagar,<br />Punjab 160055</p>
                        </div>

                    </div>


                    <div className={styles.bottomSection}>

                        <div className={styles.legalLinks}>
                            <span>Terms of Use</span>
                            <span>Privacy Policy</span>
                            <span>About Cookies</span>
                            <p>Copyright &copy; 2025 Phanom Techno Private Ltd. All rights reserved.</p>
                        </div>


                        <div className={styles.contactSection}>
                            <img src={phone} style={{height: '50px'}}/> 
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span>Call to ask any question</span>
                                <span>+91 (628) 007-2655</span>
                            </div>
                        </div>

                    </div>
                </section>


            </footer>
        </>
    )
}

export default Footer