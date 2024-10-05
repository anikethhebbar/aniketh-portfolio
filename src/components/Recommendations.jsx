import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LINKEDIN_RECOMMENDATIONS } from '../constants';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Recommendations = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextRecommendation = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === LINKEDIN_RECOMMENDATIONS.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevRecommendation = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? LINKEDIN_RECOMMENDATIONS.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextRecommendation, 10000); // Change recommendation every 10 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="border-b border-neutral-900 py-20">
            <motion.h2
                className="mb-12 text-center text-4xl"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 bg-clip-text text-3xl tracking-tight text-transparent">
                What People Say About Me
                </span>
            </motion.h2>
            <div className="relative max-w-4xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="bg-neutral-900 p-8 rounded-lg shadow-lg text-center"
                    >
                        <FaQuoteLeft className="text-purple-400 text-3xl mb-4 inline-block" />
                        <p className="text-neutral-300 text-base mb-6 italic">
                            "{LINKEDIN_RECOMMENDATIONS[currentIndex].recommendation}"
                        </p>
                        <FaQuoteRight className="text-purple-400 text-3xl mt-4 inline-block" />
                        <div className="mt-6">
                            <a 
                                href={LINKEDIN_RECOMMENDATIONS[currentIndex].linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-purple-300 font-semibold text-lg"
                            >
                                {LINKEDIN_RECOMMENDATIONS[currentIndex].name}
                            </a>
                            <p className="text-neutral-400 text-sm">
                                {LINKEDIN_RECOMMENDATIONS[currentIndex].position}
                            </p>
                            <p className="text-neutral-500 text-xs mt-2">
                                {LINKEDIN_RECOMMENDATIONS[currentIndex].relationship}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={prevRecommendation}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-neutral-800 p-2 rounded-full text-purple-300 hover:bg-neutral-700 transition-colors duration-300"
                    aria-label="Previous recommendation"
                >
                    <FaChevronLeft size={24} />
                </button>
                <button
                    onClick={nextRecommendation}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-neutral-800 p-2 rounded-full text-purple-300 hover:bg-neutral-700 transition-colors duration-300"
                    aria-label="Next recommendation"
                >
                    <FaChevronRight size={24} />
                </button>
            </div>
            <div className="flex justify-center mt-8">
                {LINKEDIN_RECOMMENDATIONS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full mx-1 ${
                            index === currentIndex ? 'bg-purple-400' : 'bg-neutral-700'
                        }`}
                        aria-label={`Go to recommendation ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Recommendations;