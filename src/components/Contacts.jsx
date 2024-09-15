import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className="border-b border-neutral-900 pb-20">
			<motion.h2
				className="my-20 text-center text-4xl"
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: 50 }}
				transition={{ duration: 0.5 }}
			>
				<span className="bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent">
					Get in Touch
				</span>
			</motion.h2>
			<div className="text-center tracking-tighter">
				<motion.p
					className="my-4"
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 50 }}
					transition={{ duration: 0.5 }}
				>
					{CONTACT.address}
				</motion.p>
				<motion.p
					className="my-4"
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 50 }}
					transition={{ duration: 0.5 }}
				>
					{CONTACT.phoneNo}
				</motion.p>
				<motion.a
					href={`mailto:${CONTACT.email}`}
					className="border-b"
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 50 }}
					transition={{ duration: 0.5 }}
				>
					{CONTACT.email}
				</motion.a>
			</div>
		</div>
	);
};

export default Contact;