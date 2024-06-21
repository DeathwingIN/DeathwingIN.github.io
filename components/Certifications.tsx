"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Certifications() {
    return (
        <div className="rounded-md flex flex-col  items-center justify-center relative overflow-hidden ">

            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center ">
                Licence and Certifications
            </h2>
            <InfiniteMovingCards
                items={certifications}
                direction="right"
                speed="fast"
                clsssName={"mt-10"}
            />
        </div>
    );
}

const certifications = [
    {
        title: "React Developer",
        image: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        link: "https://example.com/react-certification",
    },
    {
        title: "JavaScript Mastery",
        image: "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
        link: "https://example.com/js-certification",
    },
    {
        title: "CSS Wizard",
        image: "/images/css-certification.jpg",
        link: "https://example.com/css-certification",
    },
    {
        title: "TypeScript Pro",
        image: "/images/ts-certification.jpg",
        link: "https://example.com/ts-certification",
    },
    {
        title: "Node.js Expert",
        image: "/images/node-certification.jpg",
        link: "https://example.com/node-certification",
    },
];
