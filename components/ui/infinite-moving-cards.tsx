"use client";

import {cn} from "@/utils/cn";
import React, {useEffect, useState} from "react";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: {
        title: string;
        image: string;
        link: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <section id={'certifications'}>
            <div
                ref={containerRef}
                className={cn(
                    "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                    className
                )}
                style={{maxHeight: "400px", overflow: "hidden"}}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        "flex min-w-full gap-4 py-4 w-max flex-nowrap",
                        start && "animate-scroll",
                        pauseOnHover && "hover:[animation-play-state:paused]"
                    )}
                    style={{maxHeight: "300px", overflowY: "auto"}}
                >
                    {items.map((item, idx) => (
                        <li
                            key={item.title}
                            className="w-[300px] h-[300px] relative px-8 py-6 md:w-[300px] md:h-[300px] hover:opacity-100 transition-opacity duration-300"
                            style={{
                                width: "auto", // Fixed width for each item
                                height: "300px", // Fixed height for each item
                                overflow: "hidden", // Hide overflow to prevent images from stretching
                                display: "flex", // Ensure the container behaves as a flex container
                                flexDirection: "column", // Align elements vertically within the container
                                justifyContent: "center", // Center content vertically
                                alignItems: "center", // Center content horizontally
                            }}
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full w-full"
                                style={{display: "block", textDecoration: "none"}}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: "100%", // Ensure the image fills its container
                                        height: "100%", // Ensure the image fills its container
                                        objectFit: "cover", // Maintain aspect ratio and cover the container
                                        display: "block", // Ensure the image behaves as a block element
                                    }}
                                />
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-full w-full"
                                ></div>
                                <div
                                    className="flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50">
              <span className="text-xl leading-[1.6] text-white font-bold">
                {item.title}
              </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>


    );
};
