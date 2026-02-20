import React from "react";

const PathForward = () => {
  return (
    <section className="relative pt-10 pb-10 px-6 overflow-hidden text-center bg-gray-950 dark:bg-levi-black transition-colors my-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

      <h1 className="text-3xl underline md:text-5xl font-extrabold mb-6 leading-tight text-[#1a1a1a] dark:text-white">
        The Path Forward
      </h1>

      <div className="flex flex-col gap-6">
        <p className="text-2xl text-white max-w-2xl mx-auto ">
          We're moving forward with{" "}
          <span className="text-[#F2784B] font-bold">purpose</span>: from what we've built to what we're creating next in the space economy.
        </p>

        <p className="text-2xl text-white">
          As Space Ventures Institute, CAIPO, MoodChanger, RoboCollective.ai, and related projects expand,{" "}
          <span className="text-[#F2784B] font-bold">new opportunities</span> open. Everything is designed so your time converts to skills, outputs, and momentum—{" "}
          <span className="text-[#F2784B] font-bold">shaping the future of space</span>.
        </p>
      </div>
    </section>
  );
};

export default PathForward;
