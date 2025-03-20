import React from 'react';


const MissionSection = () => {
    const steps = [
        {
            number: "01",
            title: "Innovate",
            description:
                "Harnessing the power of technology to bring fresh, groundbreaking ideas to life. Stay ahead with our visionary approach to problem-solving and growth.",
        },
        {
            number: "02",
            title: "Create",
            description:
                "Designing and developing solutions that drive progress and meet unique challenges. Build the future with tailored solutions that redefine possibilities.",
        },
        {
            number: "03",
            title: "Dominate",
            description:
                "Empowering businesses to lead their industries with robust, scalable IT strategies. Achieve unmatched success with our expertise guiding your digital journey.",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-16 bg-white text-center">
            {/* Title */}
            <h2 className="text-3xl font-semibold">
                Our <span className="text-purple-500">Mission</span>
            </h2>
            <p className="text-gray-600 mt-2">
                Empowering businesses with innovation, crafting bespoke solutions, and driving industry leadership.
            </p>

            {/* Steps Section */}
            <div className="relative flex flex-col md:flex-row items-center justify-center mt-12 gap-6">
                {/* Progress Line */}
                <div className="absolute left-0 right-0 flex justify-center -z-10">
                    <div className="w-2/3 border-t-2 border-purple-400"></div>
                </div>

                {steps.map((step, index) => (
                    <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 text-center">
                        {/* <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-purple-200 font-bold">
                            {step.number}
                        </div> */}
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
                    </div>
                ))}
            </div>

            {/* Subscription Section */}
            <div className="mt-16 py-8 px-6 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-gray-500">Build skills, connect.</h3>
                <form className="flex justify-center mt-4">
                    <input
                        required={true}
                        type="email"
                        placeholder="Enter your Email"
                        className="px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none w-1/2"
                    />
                    <button className="bg-purple-500 text-white px-6 py-3 rounded-r-md font-semibold hover:bg-purple-600 transition">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}


export default MissionSection