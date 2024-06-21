import {motion} from "framer-motion";






const Hero = () => {
    return (
        <section className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16 relative">
            <div className="flex items-center justify-center shadow-xl">
                <motion.h1
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    Form Here
                </motion.h1>
            </div>
            <div className="flex flex-col gap-2">
                Globe here
            </div>
        </section>



    )
        ;
};

export default Hero;