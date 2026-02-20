import Image from "next/image";
import React from "react";
import TeamPoint from "./TeamPoint";

const MeetTheTeam = () => {
  return (
    <section className="py-10 px-6 bg-gray-950 dark:bg-levi-dark transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1a1a1a] dark:text-white">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are a collaborative, remote-first team at the intersection of{" "}
              <span className="text-[#F2784B]">space</span>,{" "}
              <span className="text-[#F2784B]">AI</span>,{" "}
              <span className="text-[#F2784B]">robotics</span>,building real products and experiences in the space economy.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <TeamPoint headWord="Research" text=" space opportunities and user needs" />
              <TeamPoint headWord="Build" text=" CAIPO Space Buddy, MoodChanger, Space Travel Agency" />
              <TeamPoint headWord="Ship" text=" work that plugs into live projects" />
              <TeamPoint headWord="Learn" text=" by doing experiential and venture-based" />
              <TeamPoint headWord="Collaborate" text=" in project pods and sprints" />
              <TeamPoint headWord="Grow" text=" with the ecosystem as it expands" />
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
            <Image
              src="/assets/space/team.png"
              alt="Team Collaboration"
              fill
              className="object-cover opacity-80 dark:opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
