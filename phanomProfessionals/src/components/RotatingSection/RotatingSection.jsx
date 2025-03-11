import React from "react";
import CountUp from "react-countup";
import styles from "./RotatingSection.module.css";
import { useInView } from "react-intersection-observer";

const RotatingSection = () => {
    const { ref, inView } = useInView();

    return (
        <div ref={ref} className={`flex justify-around w-[100%] p-5 text-white bg-[#6C5FD4] h-fit ${styles.container}`}>
            <div>
                <h2 className={`text-5xl font-bold ${styles.heading}`}>
                    {inView && <CountUp start={0} end={3} duration={2.75} />}x
                </h2>
                <h3 className={`text-xl ${styles.desc}`}>Faster Release Cycle</h3>
            </div>

            <div>
                <h2 className={`text-5xl font-bold ${styles.heading}`}>
                    {inView && <CountUp start={0} end={40} duration={2.75} />}%
                </h2>
                <h3 className={`text-xl ${styles.desc}`}>Reduction in manual administration time</h3>
            </div>

            <div>
                <h2 className={`text-5xl font-bold ${styles.heading}`}>
                    {inView && <CountUp start={0} end={60} duration={2.75} />}%
                </h2>
                <h3 className={`text-xl ${styles.desc}`}>Software Development Reusability</h3>
            </div>

            <div>
                <h2 className={`text-5xl font-bold ${styles.heading}`}>
                    {inView && <CountUp start={0} end={40} duration={2.75} />}%
                </h2>
                <h3 className={`text-xl ${styles.desc}`}>Cost Optimization</h3>
            </div>
        </div>
    );
};

export default RotatingSection;
