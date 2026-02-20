import React from "react";
import MilestoneCard from "./MilestoneCard";
import { Square } from "lucide-react";

const DeepDive = () => {
  return (
    <section className="py-10 px-6 bg-gray-950 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 text-[20px] flex flex-col gap-4 ">
          <h1 className="text-3xl md:text-5xl underline font-extrabold mb-4 text-white ">
            Deep Dive: Why We Exist
          </h1>
          <h2 className="text-[#F2784B] font-bold text-2xl md:text-4xl ">
            Closing the Gap
          </h2>
          <p>
            Most people who love space do not know how to get involved.{" "}
            <span className="text-[#F2784B]">
              Space jobs feel distant and gated
            </span>{" "}
            <br />
            internships are limited <br /> many roles require specific schools,
            locations, or networks.
          </p>
          <p>
            At the same time, the space economy is expanding tourism, robotics,
            AI, wearables, and demand for space content and education. <br />{" "}
            There is a gap between passion and real projects.{" "}
            <span className="text-[#F2784B]">
              Space Ventures Institute exists to close that gap
            </span>{" "}
            by giving you real work, exposing you to how the sector actually
            operates, and helping you build a portfolio that connects directly
            to this growing sector.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* FIRST */}
          <div className="p-8 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-levi-red shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3 ">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B]">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md" />
                  <span className="text-lg font-bold ">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white">
                  Real work on real products
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              CAIPO Space Buddy, MoodChanger for space, Space Travel Agency,
              humanoid and robotic platforms, tasks that plug into live or in
              development initiatives.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-levi-red shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B] ">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md" />
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white">
                  Exposure to the space economy
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              See how space products, experiences, and services are defined,
              priced, positioned, and delivered tourism, robotics, tools,
              content, and partnerships as they actually operate.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-levi-red shadow-sm transition-colors">
            <div className="flex justify-start gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B]">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md" />
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white">
                  Portfolio & mindset
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Build a portfolio and mindset that connect directly to this
              growing sector concrete contributions you can show, from website
              sections to research to product features.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-levi-red shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-3 items-center">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B]">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md " />
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white">
                  Remote first flexibility
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Join from anywhere, manage your time realistically, and choose the
              project streams that best fit your interests. <br /> Your time
              converts to skills, outputs, and momentum.
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
