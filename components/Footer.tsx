import {FaLocationArrow} from "react-icons/fa6";


import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 mb-32" id="resume">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                {/*<img*/}
                {/*    src="/footer-grid.svg"*/}
                {/*    alt="grid"*/}
                {/*    className="w-full h-full opacity-50 "*/}
                {/*/>*/}
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="https://drive.google.com/file/d/1qoNoHve23Ei0QnM-NtaS7U6N3egvIFDX/view" download>
                    <button
                        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                <span
                    className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
                </span>
                        <div
                            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>
                   Download CV
                    </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#fff"
                                stroke="#fff"
                                version="1.1"
                                viewBox="0 0 43.916 43.916"
                                xmlSpace="preserve"
                            >
                                <path
                                    d="M34.395 0H9.522a5 5 0 00-5 5v33.916a5 5 0 005 5h24.871a5 5 0 005-5V5a4.999 4.999 0 00-4.998-5zM9.208 16.855c0-1.172.951-2.121 2.121-2.121h.742a4.906 4.906 0 01-1.277-3.304 4.932 4.932 0 019.864.001 4.899 4.899 0 01-1.279 3.303h.709a2.12 2.12 0 012.121 2.121v3.578c0 1.122-.875 2.03-1.975 2.106h-9.051a2.115 2.115 0 01-1.975-2.106v-3.578h0zm23.5 20.561h-21.5a2 2 0 010-4h21.5a2 2 0 010 4zm0-7.5h-21.5a2 2 0 010-4h21.5a2 2 0 010 4zm0-7.5h-6.5a2 2 0 010-4h6.5a2 2 0 010 4z"></path>
                            </svg>
                        </div>
                        <span
                            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"/>
                    </button>

                </a>

            </div>
            {/*<div className="flex mt-16 md:flex-row flex-col justify-between items-center">*/}
            {/*    <p className="md:text-base text-sm md:font-normal font-light">*/}
            {/*        Copyright © 2024 Imesh Nirmal*/}
            {/*    </p>*/}
            {/*</div>*/}
        </footer>
    );
};

export default Footer;
