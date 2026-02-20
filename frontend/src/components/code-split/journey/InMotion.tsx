import React from "react";

const InMotion = () => {
  return (
    <section className="py-10 md:py-12 lg:py-16 px-5 sm:px-6 lg:px-8 bg-gray-950 text-white mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h1 className="text-3xl underline sm:text-4xl md:text-5xl font-bold tracking-tight">
            In Motion: What We're Building Right Now
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are a startup, so we keep the focus tight and real. These are the
            types of projects active around Space Ventures Institute—real
            clusters of activity that participants can plug into.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            <h2 className="text-2xl font-bold mb-4 text-amber-100">
              CAIPO Space Buddy & Consumer App
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              Exploring CAIPO as a Space Buddy for space tourists and analog
              astronauts; plus a consumer app that curates space news and acts
              as a personal space guide for daily inspiration.
            </p>
          </div>

          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            <h2 className="text-2xl font-bold mb-4 text-amber-100">
              MoodChanger for Space & Space Travel Agency
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              Adapting MoodChanger for space health and wellbeing; building an
              online, remote-first Space Travel Agency that curates and sells
              space tourism and space-themed travel experiences.
            </p>
          </div>

          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px] md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-amber-100">
              Humanoid & Robotics + Grants & Partnerships
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              Humanoid and robotic platforms plus RoboCollective.ai; space media
              and events; websites and digital presence; grants, funding, and
              partnerships with universities and space organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InMotion;
