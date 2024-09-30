import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="my-20 text-center text-4xl">
                <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent"> About Me</span>
            </motion.h1>
            <div className="flex justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-2/3 flex flex-col items-center">
                    <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="my-2 max-w-xl py-6 text-center"
                    >
                        {ABOUT_TEXT}
                    </motion.p>
                    <motion.a
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        href="https://drive.google.com/file/d/1vGQ6MoBiVgHueVip5_VTF4zFoeScZktp/view?usp=sharing"
                        download
                        className="mt-4 inline-block bg-gradient-to-r from-blue-400 via-purple-300 to-pink-500 text-transparent bg-clip-text font-semibold py-2 px-4 border border-transparent rounded hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 underline"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
