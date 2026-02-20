const JoinUs = () => {
  return (
    <section className=" relative rounded-[25px] overflow-hidden py-16 px-10 mb-4 ">
      <h1 className="w-[calc(90%-150px)] bg-[#F2784B] absolute top-65 left-30  h-2 text-[#F2784B] hidden xl:block"></h1>

      {/* <p className="text-white text-lg mb-8">Who We Serve</p> */}
      <h2 className="mb-24 text-center underline text-[40px] ">
        <span className="text-white text-[40px]  font-bold">How It </span>
        <span className="text-[#F2784B] text-[40px]  sm:text-[32px] font-bold">
          Works
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 ">
        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">1</span>
          </div>
          <h3 className="text-white text-2xl font-medium">Apply</h3>
          <p className="text-white text-lg text-center">
            Tell us your story, background, skills, interests, and why you care
            about space and this kind of work.
          </p>
        </div>

        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">2</span>
          </div>
          <h3 className="text-white text-2xl font-medium">Choose streams</h3>
          <p className="text-white text-lg text-center">
            Pick the project streams you want: CAIPO Space Buddy, MoodChanger,
            Space Travel Agency, robotics, media.
          </p>
        </div>

        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">3</span>
          </div>
          <h3 className="text-white text-2xl font-medium">Work in sprints</h3>
          <p className="text-white text-lg text-center">
            Collaborate in project pods around your streams. Sprints are focused
            blocks of work with clear outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">4</span>
          </div>
          <h3 className="text-white text-2xl font-medium">Ship & grow</h3>
          <p className="text-white text-lg text-center">
            Ship work that plugs into live projects. Get feedback, refine, and
            grow as the ecosystem expands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
