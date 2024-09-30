import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                className="my-20 text-center text-4xl"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
            >
                <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Projects
                </span>
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    width={150}
                                    height={150}
                                    alt={project.title}
                                    className="mb-6 rounded"
                                />
                            </a>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold text-center lg:text-left">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-center lg:text-left">{project.description}</p>
                            <div className="mb-4 text-center lg:text-left">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-purple-300 hover:text-purple-400 transition-colors duration-300"
                                >
                                    Link to project
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-start">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;