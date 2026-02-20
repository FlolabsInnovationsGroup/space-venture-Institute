"use client";

import humanoidImg from "../../public/assets/space/project1.jpeg";
import aiBuddyImg from "../../public/assets/space/project2.png";
import legalFramworkImg from "../../public/assets/space/project3.jpg";
import experientialImg from "../../public/assets/space/project4.png";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const OurProjectsCarosal: React.FC = () => {
  const slides = useMemo(
    () => [
      { src: humanoidImg, alt: "CAIPO as Space Buddy & humanoid platforms" },
      {
        src: aiBuddyImg,
        alt: "CAIPO Space Buddy consumer app & inspiration feed",
      },
      {
        src: legalFramworkImg,
        alt: "MoodChanger for space health and wellbeing",
      },
      {
        src: experientialImg,
        alt: "Space Travel Agency and space tourism marketplace",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => next(), 5000);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  // Keyboard arrows (optional)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  // Touch swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? startX.current;
    const diff = startX.current - endX;

    // Threshold
    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
  };

  return (
    <section className="rounded-[25px] overflow-hidden pt-12 px-4 mb-4  ">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-white text-[40px] font-bold underline text-center">
          What We Are Building
        </h2>
        <p className="text-white text-lg text-center max-w-[600px] leading-[140%]">
          Real clusters of activity: <br />
          CAIPO Space Buddy, MoodChanger for space, Space Travel Agency,
          humanoid & robotics, media, websites, grants that participants can
          plug into.
        </p>

        <div className="relative w-full max-w-[1428px] py-10">
          {/* Slider */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="min-w-full flex items-center justify-center">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    className="w-[800px] h-[400px] rounded-[40px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              className="p-2"
              onClick={prev}
              aria-label="Previous slide"
              type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.12155 10.5001H21.0002V13.5001H8.12155L13.0609 18.4395L10.9396 20.5608L2.37891 12.0001L10.9396 3.43945L13.0609 5.56077L8.12155 10.5001Z"
                  fill="#999999"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2.5">
              {slides.map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all ${
                      active
                        ? "w-4 h-4 bg-[#F2784B]"
                        : "w-3 h-3 bg-[#999999] opacity-50 hover:opacity-80"
                    }`}
                  />
                );
              })}
            </div>

            <button
              className="p-2"
              onClick={next}
              aria-label="Next slide"
              type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4775 13.5573H2.92383V10.4432H15.4775L10.6628 5.31619L12.7306 3.11426L21.0752 12.0002L12.7306 20.8862L10.6628 18.6843L15.4775 13.5573Z"
                  fill="#999999"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectsCarosal;
