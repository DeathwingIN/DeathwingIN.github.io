import {FaLocationArrow} from "react-icons/fa6";
import MagicButton from "./MagicButton";
import {Spotlight} from "./ui/Spotlight";
import {TextGenerateEffect} from "./ui/TextGenerateEffect";
import {motion} from "framer-motion";
import Image from 'next/image';
import {AtSign, Github, Linkedin} from "lucide-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "./ui/animated-tooltip";


const Hero = () => {
    return (
        <div className="pb-5 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>


            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <header id="hero"
                    className="flex flex-col sm:flex-row h-screen w-full justify-center items-center gap-4 mt-16 relative ">
                <div
                    className="flex h-screen w-full items-center justify-center flex lg:-mt-[350px] md:-mt-[420px] z-10 shadow-xl">
                    <motion.h1
                        initial={{opacity: 0.5, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/Me.png"
                            alt="Profile Image"
                            width={600}
                            height={600}
                            className="shadow-lg"
                        />
                    </motion.h1>
                </div>
                <div className="flex flex-col gap-2 w-full  h-screen lg:mt-[120px]">
                    <div>
                        <TextGenerateEffect
                            words="🚀 Full Stack Developer | Software Engineer in Training | Tech Enthusiast 🌐 | DevOps & Cloud Computing Passionate ☁️"
                            className="text-center text-[20px] md:text-2xl lg:text-5xl"/>
                    </div>
                    <div>
                        <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl">
                            Hi! I&apos;m Imesh Nirmal, an undergraduate seeking a software engineering internship.
                            Skilled in Java, JavaScript, React, and Angular. Known for timely task completion, teamwork,
                            and strong analytical skills. Passionate about DevOps and cloud computing. Explore my
                            projects to see my work!
                        </p>
                    </div>
                    <div className="flex gap-4 ">
                        <TooltipProvider>
                            <div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="https://www.linkedin.com/in/imesh-nirmal/" target="_blank">
                                            <div>
                                                <button
                                                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                                    <Linkedin/>
                                                </button>
                                            </div>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="https://github.com/DeathwingIN" target="_blank">
                                            <button
                                                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                                <Github/>
                                            </button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href="mailto:imeshnirmal1u@gmail.com" target="_blank">
                                            <button
                                                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                                <AtSign/>
                                            </button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </div>
                </div>

            </header>


        </div>
    )
        ;
};

export default Hero;