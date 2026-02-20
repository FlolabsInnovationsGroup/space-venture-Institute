const Initiatives = () => {
  return (
    <section className="rounded-[25px] bg-gray-950 py-10 px-4 my-10">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-white text-[43px] font-bold text-center underline">
          Initiatives: By the Numbers
        </h2>
        <p className="text-white text-lg text-center max-w-[590px] leading-[140%]">
          We keep the focus tight and real. These are the types of projects
          active around Space Ventures Institute.
        </p>

        <div className="bg-black/10  rounded-[50px] p-8 md:p-16 w-full max-w-[1079px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly  gap-8   ">
            {/* Stat 1 */}
            <div className="flex flex-col gap-7 items-center w-full text-center ">
              <h3 className="text-white text-[80px] sm:text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
                13
              </h3>
              <h4 className="text-[#2962FF] text-2xl font-medium leading-[109%] tracking-[-1.2px]">
                Finalized Projects
              </h4>
              <p className="text-white text-xl font-normal">
                Completed initiatives that have laid the groundwork for
                innovation and operational clarity.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-7 items-center w-full text-center ">
              <h3 className="text-white text-[80px] sm:text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
                8+
              </h3>
              <h4 className="text-[#2962FF] text-2xl font-medium leading-[109%] tracking-[-1.2px]">
                Active Projects
              </h4>
              <p className="text-white text-xl font-normal">
                Currently underway, generating insights and supporting ongoing
                initiatives.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-7 items-center w-full text-center ">
              <h3 className="text-white text-[80px] sm:text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
                5
              </h3>
              <h4 className="text-[#2962FF] text-2xl font-medium leading-[109%] tracking-[-1.2px]">
                Planned Projects
              </h4>
              <p className="text-white text-xl font-normal">
                Upcoming initiatives we are preparing to explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
