import React from "react";

const HowWeWork = () => {
  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gray-950 rounded-[25px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-6">
            How It Works
          </h2>

          <p className="text-xl md:text-2xl lg:text-[28px] font-medium text-white mb-6 leading-relaxed">
            Apply and tell us your story. Choose the project streams you want
            (CAIPO Space Buddy, MoodChanger, Space Travel Agency, humanoid and
            robotics, space media, websites, grants). Work in structured sprints
            in project pods. Ship work that plugs into live or in-development
            projects, get feedback, refine, and grow. As the ecosystem expands,
            new opportunities open—everything is designed so your time converts
            to skills, outputs, and momentum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
