
const WhyChooseUs = () => {
  return (
    <section className="py-10 px-6 bg-gray-950  rounded-[25px]  dark:bg-levi-black border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid  gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-levi-ink dark:text-white mb-8 transition-colors duration-300">
            Who We Are...
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-lg md:text-2xl font-bold text-gray-400 dark:text-gray-600">
              <span className="text-[#F2784B]">Not</span>{" "}
              <span className=" text-white">
                a traditional university program.
              </span>
            </div>
            <div className="flex items-center gap-4 text-lg md:text-2xl font-bold text-gray-400 dark:text-gray-600">
              <span className="text-[#F2784B]">Not</span>{" "}
              <span className=" text-white">a passive online course.</span>
            </div>
            <div className="flex items-center gap-4 text-lg md:text-2xl font-bold text-gray-400 dark:text-gray-600">
              <span className="text-[#F2784B]">Not</span>{" "}
              <span className=" text-white">
                just a fan community for space news.
              </span>
            </div>
          </div>
        </div>

        <div className="relative p-10 rounded-3xl   border ">
          <h3 className="text-lg md:text-2xl font-extrabold text-levi-ink dark:text-white mb-6 transition-colors duration-300">
            Space Ventures Institute is: <br />
            <p className="mt-2">
              A startup-powered venture studio, an experiential learning
              institute, and a <span className="text-[#F2784B]">bridge</span>{" "}
              between space-curious talent and real space economy projects.
            </p>
          </h3>
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
            Our ecosystem includes CAIPO, MoodChanger, RoboCollective.ai, and
            R&D on humanoid and robotic platforms.
            <hr className="my-2" />
            <p>
              <span className="text-[#F2784B]">Remote first by design.</span>{" "}
              You join from anywhere, collaborate online, and choose the
              projects that best fit your interests.
            </p>
          </div>
          <div className="h-1 w-20 bg-levi-red rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
