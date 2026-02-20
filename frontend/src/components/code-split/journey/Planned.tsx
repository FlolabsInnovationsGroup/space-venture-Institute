import React from "react";
import TimelineItem from "./TimelineItem";

const Planned = () => {
  return (
    <section className="py-10 px-6 bg-gray-950 dark:bg-levi-black transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-[22px] mb-20 flex flex-col gap-3">
          <h2 className="text-4xl underline font-extrabold mb-4 text-[#1a1a1a] dark:text-white">
            How It Works: A Simple Flow
          </h2>
          <p className="text-gray-100 ">
            Planned where{" "}
            <span className="font-bold text-[#2962FF]">possible</span>. Open
            where <span className="font-bold text-[#2962FF]">necessary</span>.
          </p>
          <p className=" font-bold text-[#2962FF] ">
            We are ready for what comes next.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-300 dark:border-white/10 ml-4 md:ml-1/2 space-y-16">
          <TimelineItem
            phase="I"
            title="Apply and tell us your story"
            desc="Share your background, skills, interests, and why you care about space and this kind of work."
            align="left"
            highlight
          />
          <TimelineItem
            phase="II"
            title="Choose the project streams you want"
            desc="Review the active streams and select the ones that excite you: CAIPO as Space Buddy, CAIPO consumer app, MoodChanger for space, Space Travel Agency, humanoid and robotics, space media, websites, grants and partnerships. You can start with one stream and add or change as you grow."
            align="right"
          />
          <TimelineItem
            phase="III"
            title="Work in structured sprints"
            desc="Collaborate with others in project pods around the streams you selected. Sprints are focused blocks of work with clear outcomes."
            align="left"
            highlight
          />
          <TimelineItem
            phase="IV"
            title="Ship, review, and learn"
            desc="Ship work that plugs into live or in-development projects. Receive feedback, refine your contributions, and grow."
            align="right"
          />
          <TimelineItem
            phase="V"
            title="Grow with the ecosystem"
            desc="As Space Ventures Institute, CAIPO, MoodChanger, RoboCollective.ai, and related projects expand, new opportunities open. Everything is designed so your time converts to skills, outputs, and momentum."
            align="left"
            highlight
          />
        </div>
      </div>
    </section>
  );
};

export default Planned;
