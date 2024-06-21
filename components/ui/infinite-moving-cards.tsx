"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

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
              style={{ height: "400px" }} // Set fixed height of 400px for the container
          >
              <ul
                  ref={scrollerRef}
                  className={cn(
                      "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                      start && "animate-scroll",
                      pauseOnHover && "hover:[animation-play-state:paused]"
                  )}
                  style={{ height: "50%", maxHeight: "300px" }} // Limit height of ul to 300px for overflow handling
              >
                  {items.map((item, idx) => (
                      <li
                          key={item.title}
                          className="w-[200px] h-[200px] relative px-8 py-6 md:w-[300px] md:h-[300px] hover:opacity-100 transition-opacity duration-300"
                          style={{
                              backgroundImage: `url(${item.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                          }}
                      >
                          <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-20 block h-full w-full"
                          >
                              <div
                                  aria-hidden="true"
                                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-full w-full"
                              ></div>
                              <div className="relative z-20 flex flex-col items-center justify-center text-center h-full">
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
