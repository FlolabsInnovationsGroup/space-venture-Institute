const OueValues = () => {
  const items = [
    {
      title: "Real work, real sector",
      description:
        "We close the gap between space passion and real space economy projects.",
    },
    {
      title: "Remote first",
      description:
        "Join from anywhere, collaborate online, choose the projects that fit your interests.",
    },
    {
      title: "Learn by doing",
      description:
        "Experiential learning—you contribute to live initiatives and walk away with a portfolio you can show.",
    },
    {
      title: "Community and curiosity",
      description:
        "People serious about space, AI, and entrepreneurship. You bring curiosity and drive; we provide the projects, structure, and community.",
    },
  ];

  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gray-950 rounded-[25px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-12">
            Our Values
          </h2>

          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium font-medium text-white md:w-[210px] flex-shrink-0 leading-[1.35] tracking-[-0.48px]">
                    {item.title}
                  </h3>
                  <p className="text-xl md:text-2xl lg:text-[28px] font-medium text-white flex-1 leading-[1.35] tracking-[-0.4px]">
                    {item.description}
                  </p>
                </div>
                {index < items.length - 1 && (
                  <div className="w-full h-px bg-white mt-8" />
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
