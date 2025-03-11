import styles from './Appbar.module.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import hamburger from '../../assets/hamburger.png';


export default function Appbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className={styles.navbar}>
            <img src= {logo} alt='logo' className={styles.logo} />

            {/* Hamburger Menu for Mobile */}
            <img 
                src={hamburger} 
                alt="menu" 
                className={styles.hamburger} 
                onClick={() => setMenuOpen(!menuOpen)} 
            />

            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <li className={styles.dropdown}>
                    <a href="#">Service ▼</a>
                    <ul className={styles.dropdownMenu}>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">App Development</a></li>
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a href="#">Hire Indian Talent ▼</a>
                    <ul className={styles.dropdownMenu}>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Designers</a></li>
                        <li><a href="#">Sales and operations</a></li>
                    </ul>
                </li>
                <li><a href="#">Our Portfolio</a></li>
                <li><a href="#">Case Study</a></li>
                <li><button className={styles.btn}>Book an Appointment</button></li>
            </ul>
        </nav>
    );
}
