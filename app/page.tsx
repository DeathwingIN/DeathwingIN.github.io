import GlobeDemo from "@/components/GitHubGlobe";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import TypewriterEffectSmoothDemo from "@/components/TypeWritter";
import Hero from "@/components/Hero";


export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <Hero />
            </div>
        </main>

    );
}
