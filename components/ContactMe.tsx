import {motion} from "framer-motion";
import React from "react";
import {Label} from "../components/ui/label";
import {Input} from "../components/ui/input";
import {cn} from "@/utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import MagicButton from "./MagicButton";

import {GlobeDemo} from "@/components/Globe";
import { FaLocationArrow } from "react-icons/fa6";


const ContactMe = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <section className={ "mt-16 pt-10"} id={"contact"}>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center ">
                Contact Me
            </h1>
            <p className="leading-7 text-center pt-10">
               Just fill in the form below and I will get back to you as soon as possible
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2  relative ">
                <div className="flex-3 md:flex-1 ">
                    <motion.h1
                        initial={{opacity: 0.5, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative max-w-md w-full h-full mx-auto rounded-none md:rounded-2xl shadow-input bg-white dark:bg-black xl:mt-[200px] z-20"
                    >
                        <p className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                            Send A Message
                        </p>
                        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300   pl-4 ">

                        </p>
                        <form onSubmit={handleSubmit} className="relative z-30 p-4 md:p-8 ">
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                <LabelInputContainer>
                                    <Label htmlFor="firstname">First name</Label>
                                    <Input id="firstname" placeholder="Tyler" type="text"/>
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label htmlFor="lastname">Last name</Label>
                                    <Input id="lastname" placeholder="Durden" type="text"/>
                                </LabelInputContainer>
                            </div>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" placeholder="projectmayhem@fc.com" type="email"/>
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-2 ">
                                <Label htmlFor="confirmEmail">Message</Label>
                                <Input id="confirmEmail" placeholder="Message Here" type="email" />
                            </LabelInputContainer>


                            <MagicButton
                                title="Send Message"
                                icon={<FaLocationArrow />}
                                position="right"
                            />

                            <div
                                className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>
                        </form>
                    </motion.h1>

                </div>
                <div className="hidden sm:flex flex-1 w-1/4 -mt-[95px]">
                    <GlobeDemo/>
                </div>
            </div>
        </section>


    )
        ;
};

export default ContactMe;


const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};