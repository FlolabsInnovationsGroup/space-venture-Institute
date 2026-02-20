const Foundations = () => {
  return (
    <section className="py-10 md:py-12 lg:py-16 px-5 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h1 className="text-3xl underline sm:text-4xl md:text-5xl font-bold tracking-tight">
            Foundations: Our Ecosystem
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We sit inside a broader ecosystem that makes our work possible—and
            that participants can plug into.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-amber-400 bg-amber-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md border-2 border-amber-400/30">
              1
            </div>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-100">
              CAIPO
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              An AI wearable and assistant that can evolve into a Space
              Buddy—support, guidance, and inspiration for space tourists,
              analog astronauts, and everyday space enthusiasts.
            </p>
          </div>

          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-amber-400 bg-amber-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md border-2 border-amber-400/30">
              2
            </div>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-100">
              MoodChanger
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              A human performance and wellbeing platform—adapted for space
              health, stress and mood tracking, and wellbeing tools for space
              tourism and training.
            </p>
          </div>

          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px] md:col-span-2 lg:col-span-1">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-amber-400 bg-amber-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md border-2 border-amber-400/30">
              3
            </div>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-100">
              RoboCollective.ai & R&D
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed">
              A robotics reseller and integration brand, plus internal R&D on
              humanoid robots and other robotic platforms—connected to the Space
              Ventures narrative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundations;
