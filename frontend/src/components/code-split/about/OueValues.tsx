const OueValues = () => {
  const items = [
    {
      title: "Remote first",
      description:
        "Join from anywhere, collaborate online, and choose the projects that fit your interests.",
    },
    {
      title: "Learn by doing",
      description:
        "Experiential learning: you contribute to live initiatives and walk away with a portfolio you can show.",
    },
    {
      title: "Community & curiosity",
      description:
        "People serious about space, AI, and entrepreneurship. You bring curiosity and drive; we provide the projects, structure, and community.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 mt-16 lg:mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-950 rounded-2xl px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
            Our Values
          </h2>

          <div className="space-y-10">
            {/* Static First Item */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white md:w-64 flex-shrink-0 leading-snug">
                Real work, <br className="hidden sm:block" /> real sector
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 flex-1 leading-relaxed">
                We close the gap between space passion and real space economy
                projects.
              </p>
            </div>

            <div className="w-full h-px bg-white/90" />

            {/* Dynamic Items */}
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white md:w-64 flex-shrink-0 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 flex-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {index < items.length - 1 && (
                  <div className="w-full h-px bg-white/90 mt-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OueValues;
