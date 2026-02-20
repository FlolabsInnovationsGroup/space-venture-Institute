import React from "react";

const NotAll = () => {
  return (
    <section className="py-10 md:py-12 lg:py-16 my-10 px-10 xl:px-30 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 flex flex-col gap-4 text-[18px]">
          <h1 className="text-3xl underline sm:text-4xl md:text-5xl font-bold tracking-tight">
            But That's Not All
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We also work on{" "}
            <span className="text-[#F2784B]">
              space media, conferences, and online events
            </span>
            <br />
            digital formats that highlight founders, researchers, students, and
            creators at the intersection of space, AI, robotics, health, and
            travel.
          </p>
          <p>
            Plus{" "}
            <span className="text-[#F2784B]">
              websites, brand, and digital presence
            </span>{" "}
            for Space Ventures Institute, the Space Travel Agency, and
            RoboCollective.ai, landing pages, funnels, and storytelling that
            make space feel both inspiring and accessible.
          </p>
          <p className="text-[20px] font-bold">
            Grants, Funding & Partnerships
          </p>
          <p>
            We research and apply for{" "}
            <span className="text-[#F2784B]">grants and funding</span> aligned
            with space, AI, robotics, health, and education , build partnerships
            with universities, research labs, space organizations, and space
            tourism providers so students and career changers can contribute to
            funded work.
          </p>
        </div>

        {/* Cards Grid */}
      </div>
    </section>
  );
};

export default NotAll;
