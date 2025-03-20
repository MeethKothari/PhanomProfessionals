import { FaArrowRight } from "react-icons/fa";
import logo from '../../assets/digitalMarketing/logo.png';
import seo from '../../assets/digitalMarketing/seo.png';
import social from '../../assets/digitalMarketing/social.png';
import ppc from '../../assets/digitalMarketing/ppc.png';
import youTube from '../../assets/digitalMarketing/youTube.png';
import seoIcon from '../../assets/digitalMarketing/seoIcon.png';
import socialIcon from '../../assets/digitalMarketing/socialIcon.png';
import ppcIcon from '../../assets/digitalMarketing/ppcIcon.png';
import ytIcon from '../../assets/digitalMarketing/ytIcon.png';

const services = [
    {
        image: seo,
        bookings: "240k+ Appointment Booked Today",
        description: "Technical SEO | On-Page SEO | Off-Page SEO | Local SEO",
        bgColor: "bg-purple-500",
    },
    {
        image: social,
        bookings: "240k+ Appointment Booked Today",
        description: "Facebook | Instagram | X | LinkedIn | Pinterest",
        bgColor: "bg-blue-900",
    },
    {
        image: ppc,
        bookings: "240k+ Appointment Booked Today",
        description: "Search Ads | Display Ads | Demand Gen PMax Ads | Video Ads | Lead Generation",
        bgColor: "bg-gray-800",
    },
    {
        image: youTube,
        bookings: "240k+ Appointment Booked Today",
        description: "Channel SEO | Skip-Non Skip Ads | Increase Subscribers & Views",
        bgColor: "bg-red-500",
    },
];

export default function DigitalMarketing() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white">


            {/* Left Section */}
            <div className="w-full lg:w-1/3 space-y-6">
                <h2 className="text-4xl font-bold text-purple-500 neon-effect">
                    Explore <br /> our <br /> Service
                </h2>
                <p className="text-gray-600">
                    Explore our service and discover solutions designed to meet your unique needs.
                    With a focus on quality and innovation, we turn your vision into reality.
                </p>
                <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-600 transition">
                    Book an Appointment
                </button>
            </div>



            {/* Right Section */}
            <div className="w-full lg:w-2/3 bg-white shadow-md rounded-xl p-6">
                <img src={logo} />
                <h3 className="text-3xl font-semibold text-purple-700">Digital Marketing</h3>
                <p className="text-gray-600 my-2">
                    Keep your lawn in top shape without lifting a finger and boost the appearance of your property.
                </p>



                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='p-4 text-white rounded-lg shadow-lg'
                        >
                            <img src={service.image} />
                            <p className=" text-black text-xs">{service.bookings}</p>
                            <h4 className="mt-2  text-black">{service.description}</h4>
                            <button className="mt-4 text-black bg-white px-3 py-1 rounded-md text-sm border-2 ">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                {/* Tools and Arrow */}
                <div className="flex items-center mt-6 gap-2">
                    <p className="text-gray-600">Tools:</p>
                    <img src={seoIcon} className="text-2xl cursor-pointer" />
                    <img src={socialIcon} className="text-2xl cursor-pointer" />
                    <img src={ppcIcon} className="text-2xl cursor-pointer" />
                    <img src={ytIcon} className="text-2xl cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
