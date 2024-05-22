"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [

        {
            text: "Coming",
        },
        {
            text: "Soon...",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center text-6xl mt-[70px] ">
            <TypewriterEffectSmooth words={words} className={'text-6xl'} />
        </div>
    );
}


export default TypewriterEffectSmoothDemo;