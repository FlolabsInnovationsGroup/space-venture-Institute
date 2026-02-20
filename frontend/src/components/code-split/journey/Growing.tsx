const Growing = () => {
  return (
    <section className="relative pt-10 pb-10 px-6 overflow-hidden text-center bg-gray-950 dark:bg-levi-black transition-colors mb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

      <h1 className="text-3xl underline md:text-5xl font-extrabold mb-6 leading-tight text-[#1a1a1a] dark:text-white">
        Growing the Culture
      </h1>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl text-white">
          <span className=" text-[#F2784B] font-bold">Remote first</span> by
          design , you join from anywhere, collaborate online, and choose the
          projects that best fit your interests.
        </h3>

        <p className="text-2xl text-white max-w-2xl mx-auto ">
          In our ecosystem, we connect space-curious talent with real space
          economy projects.{" "}
          <span className="text-[#F2784B] font-bold">
            Your time converts to skills, outputs, and momentum
          </span>
          .
        </p>
        <p className="text-2xl text-white">
          Everything is designed so you can manage your time realistically while
          contributing to CAIPO, MoodChanger, the Space Travel Agency, robotics,
          media, and more.
        </p>
        <p className="text-2xl text-white">
          One stream today,{" "}
          <span className="text-[#F2784B] font-bold">more tomorrow. </span>{" "}
          <br /> as the ecosystem grows, new opportunities open.
        </p>
      </div>

      {/* INITIATIVES BY NUMBERS */}
    </section>
  );
};

export default Growing;
