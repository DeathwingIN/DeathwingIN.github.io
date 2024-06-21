"use client";

import {navItems} from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import {Skills} from "@/components/Skills";
import {Certifications} from "@/components/Certifications";


const Home = () => {
    return (
        <main
            className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
            <div className="max-w-full w-full px-8 ">
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Skills/>
                <RecentProjects/>
                <Certifications/>
                <Footer/>
            </div>
        </main>
    );
};

export default Home;
