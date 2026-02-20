
import React from "react";
import { Compass } from "lucide-react";

const OurCompass = () => {
  return (
    <section className="relative py-10 md:py-24 lg:py-28 px-5 sm:px-6 lg:px-8 min-h-[700px] md:min-h-[800px] overflow-hidden bg-gray-950">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/poster-bg.jpg" // صورة ثابتة تظهر لحد ما الفيديو يحمل (اختياري)
      >
        <source src="/videos/background-loop.mp4" type="video/mp4" />
        <source src="/videos/background-loop.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay لتحسين قراءة النص */}
      <div className="absolute  inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70 pointer-events-none" />

      {/* المحتوى */}
      <div className="relative w-full  mx-auto flex flex-col  justify-center  items-center gap-12 lg:gap-16 z-10">
        {/* الجزء النصي */}
        <div className="w-full md:w-3/5 lg:w-7/12 space-y-8 md:space-y-10 text-center md:text-left">
          {/* العنوان + الأيقونة */}
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 backdrop-blur-sm">
              <Compass
                className="w-9 h-9 sm:w-11 sm:h-11 text-cyan-400"
                strokeWidth={1.7}
              />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Our Compass
            </h2>
          </div>

          {/* Intro */}
          <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto md:mx-0">
            Most people who love space do not know how to get involved. We exist to close that gap.
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white pt-4 md:pt-6">
            We focus on:
          </h3>

          <ul className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 text-left inline-block">
            {[
              {
                title: "Giving you real work on real space-related products and services",
                desc: "CAIPO, MoodChanger, Space Travel Agency, robotics, and more.",
              },
              {
                title: "Exposing you to space tourism, robotics, tools, and content",
                desc: "As they actually operate, not just in theory.",
              },
              {
                title: "Helping you build a portfolio and mindset",
                desc: "That connect directly to this growing sector.",
              },
              {
                title: "Remote first by design",
                desc: "Join from anywhere, collaborate online, choose the projects that fit your interests.",
              },
            ].map((item, idx) => (
              <li key={idx} className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/25 ring-2 ring-cyan-500/40">
                  <span className="h-3 w-3 rounded-full bg-cyan-400" />
                </span>

                <span className="font-semibold text-white text-lg sm:text-xl tracking-tight block">
                  {item.title}
                </span>
                {item.desc && (
                  <span className="text-gray-300 text-base sm:text-lg mt-1 block">
                    {item.desc}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* مساحة فارغة على اليمين في الديسكتوب – يمكن تضيف عنصر آخر لو حابب */}
      </div>
    </section>
  );
};

export default OurCompass;
