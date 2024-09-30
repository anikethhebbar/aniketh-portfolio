import { FaPython, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiOpenai, SiFastapi } from "react-icons/si";
import { motion } from 'framer-motion';

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                <motion.span
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Technologies
                </motion.span>
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
                {[
                    { Icon: FaPython, color: "text-blue-400", name: "Python" },
                    { Icon: SiFastapi, color: "text-cyan-500", name: "FastAPI" },
                    { Icon: SiOpenai, color: "text-green-400", name: "OpenAI" },
                    { Icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
                    { Icon: FaDocker, color: "text-blue-400", name: "Docker" },
                    { Icon: FaGitAlt, color: "text-orange-400", name: "Git" },
                    { Icon: FaReact, color: "text-cyan-400", name: "React" },
                ].map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
                        whileInView={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <tech.Icon className={`text-7xl ${tech.color}`} />
                        <p className="mt-2 text-lg">{tech.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
