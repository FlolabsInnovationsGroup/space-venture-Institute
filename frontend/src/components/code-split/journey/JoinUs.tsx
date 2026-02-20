import Link from "next/link";
import logo from "../../../../public/assets/space/logo.svg";
import Image from "next/image";
const JoinUs = () => {
  return (
    <section className="py-10 px-6 text-center bg-gray-950 my-10">
      <h2 className="text-5xl underline font-extrabold mb-8 text-[#1a1a1a] dark:text-white">
        Join Space Ventures Institute
      </h2>
      <div className="flex flex-col gap-5 mb-10 text-[20px]">
        <p className="text-[#2962FF]">
          You bring the curiosity, skills, and drive. We provide the projects,
          structure, and community.
        </p>

        <p>
          If you want to help shape CAIPO as a Space Buddy, adapt MoodChanger
          for space, build the Space Travel Agency, contribute to humanoid and
          robotics, or work on space media and partnerships, you are exactly the
          type of person we want to hear from.
        </p>
        <p>
          <span className="text-[#2962FF]">Advance your space career.</span> Be
          at the center of the future.
        </p>

        <p>
          •Remote first •Space sector startup •Experiential and venture-based
          learning
        </p>

        <Image
          src={logo}
          alt="Space Ventures Institute"
          width={50}
          height={50}
          className="h-12 w-auto object-contain my-5  "
          priority
        />
      </div>

      <div className="flex justify-center gap-8">
        <button className="text-[22px] animate-pulse font-bold bg-white text-black outline px-6 py-2 rounded-full cursor-pointer hover:scale-110 hover:text-[#2962FF] transform duration-200 ease-in-out">
          <Link href="https://hephaestus.international/internships">
            Apply to Space Ventures Institute
          </Link>
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
