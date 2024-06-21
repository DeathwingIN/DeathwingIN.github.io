"use client";

import React, {useEffect, useState} from "react";
import {InfiniteMovingCards} from "../components/ui/infinite-moving-cards";

export function Certifications() {
    return (
        <section id={"certification"}>

            <div
                className="rounded-md flex flex-col  items-center justify-center relative overflow-hidden mt-16 pt-10 ">

                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center mb-[80px] ">
                    Licence and Certifications
                </h2>
                <InfiniteMovingCards
                    items={certifications}
                    direction="right"
                    speed="slow"

                />
            </div>
        </section>
    );
}

const certifications = [
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
        link: "https://www.credly.com/badges/0b523a40-3725-4103-97cc-9e49473ba7aa",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
        link: "https://www.credly.com/badges/2a657f3e-78fc-48fc-9294-60c654632163",
    },

    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/84ac9eff-b8a2-4683-846b-f59887a73801/Python_101_Data_Science.png",
        link: "https://www.credly.com/badges/4e3976e1-bdde-4c15-8322-52814ccf8ef8",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
        link: "https://www.credly.com/badges/feaabab7-e6db-4c46-9a9a-590e0783b9ca",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/a9d0fe89-a11c-4266-8940-9eca7762b294/image.png",
        link: "https://www.credly.com/badges/b1d3324d-fbef-40de-af6b-0272ca3b88f0",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
        link: "https://www.credly.com/badges/e3ecde62-7ab3-483a-ab00-3694e3fb1929",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
        link: "https://www.credly.com/badges/c8147b43-97c1-445c-ae4d-2f3d104b069e",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/6240e108-1407-4773-8621-cc2e4736d4e6/Web_Development_with_HTML-CSS-JavaScript_Essentials.png",
        link: "https://www.credly.com/badges/872c79f3-0767-4ba3-a5d5-a78f18dc4292",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png",
        link: "https://www.credly.com/badges/bb52a7ae-db5b-45a3-bb39-cb8ca84fe18a",
    },

    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png",
        link: "https://www.credly.com/badges/bb52a7ae-db5b-45a3-bb39-cb8ca84fe18a",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png",
        link: "https://www.credly.com/badges/292148fd-0c66-4594-aa71-6d7ee073d082",
    },

    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/b126c61c-4781-4f03-9b2b-062963003abf/image.png",
        link: "https://www.credly.com/badges/3da6cab2-2f65-4024-9eb9-a1dec5e91040",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/11088b22-7be5-4fe3-995d-c014514c8dc3/image.png",
        link: "https://www.credly.com/badges/f116b18c-0a39-4454-a741-783f71980337",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/8ab21779-042f-4616-a6ab-fd0d62648b24/image.png",
        link: "https://www.credly.com/badges/9a04b6bb-6a08-41fc-9615-1e09265685c9",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/f0388a0c-130f-47cd-8750-d6357e907e58/image.png",
        link: "https://www.credly.com/badges/a3d46bad-8789-4dd4-b300-711eb7a0e1c4",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/6160e2c1-4a95-4f47-8c5b-f2dde7bb6a67/image.png",
        link: "https://www.credly.com/badges/cb56cef1-5bb3-4974-a10a-bc15dc4ea393",
    },
    {
        title: "",
        image: "https://images.credly.com/size/340x340/images/189c5c31-67c6-4eae-87dc-3b8185a99043/image.png",
        link: "https://www.credly.com/badges/34c2ad25-abb5-48c3-80f3-af26ff7ca05c",
    },


    {
        title: "",
        link: "https://www.credly.com/badges/52bd8660-d59b-409b-ac9e-ec4f8608f789",
        image: "https://images.credly.com/size/340x340/images/1d95accd-3e3d-466f-a432-5dceb4998fd1/image.png",
    },

];
