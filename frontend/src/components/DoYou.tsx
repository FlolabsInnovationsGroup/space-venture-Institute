import Link from "next/link";

import Image from "next/image";
import CheckItem from "./code-split/DoYou/CheckItem";
import doyouImg from "../../public/assets/space/do you.jpg";

const DoYou = () => {
  return (
    <section className="relative rounded-3xl my-8 py-10 px-6 flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 opacity-30">
        <Image src={doyouImg} alt="Wisdom" fill className="object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-levi-black via-levi-black/90 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-3xl text-center shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
          Join Space Ventures Institute
        </h2>

        <div className="grid md:grid-cols-1 gap-6 mb-12 text-left max-w-2xl mx-auto">
          <CheckItem text="Help shape CAIPO as a Space Buddy and inspiration engine" />
          <CheckItem text="Adapt MoodChanger for space health and wellbeing" />
          <CheckItem text="Build and grow a Space Travel Agency and space tourism marketplace" />
          <CheckItem text="Contribute to humanoid and robotic platform development and RoboCollective.ai" />
          <CheckItem text="Work on space media, websites, partnerships, and funding initiatives" />
        </div>

        <div className="space-y-8">
          <h3 className="text-xl md:text-2xl font-bold text-levi-red">
            If that sounds like you, we want to hear from you.
          </h3>
          <button className="cursor-pointer hover:scale-110  transform duration-100 ease-in-out">
            <Link
              href="https://hephaestus.international/internships"
              className="bg-gradient-to-r from-red-300 to-orange-400 rounded-2xl  text-white border-none px-12 py-4 text-lg font-bold shadow-lg transform duration-150 ease-in-out">
              Apply today
            </Link>
          </button>
          <p className="text-white/80 text-sm md:text-base">
            Remote first • Space sector startup • Experiential and venture-based learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoYou;
