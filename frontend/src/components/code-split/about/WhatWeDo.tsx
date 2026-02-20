export default function WhatWeDo() {
  const items = [
    {
      title: "Hands-on project work",
      description:
        "Real tasks related to CAIPO Space Buddy, MoodChanger for space, the Space Travel Agency, humanoid and robotic platforms.",
    },
    {
      title: "Multy Experience ",
      description:
        "Depending on your profile, you might contribute to research, UX and UI, development, data, storytelling, or marketing.",
    },
    {
      title: "Practical exposure ",
      description:
        "You see how space products, experiences, and services are defined, priced, positioned, and delivered, not just in theory.",
    },
    {
      title: "Portfolio, community & flexibility",
      description:
        "Concrete contributions to live or in-development initiatives, a community of peers serious about space and AI, and the ability to join from anywhere and manage your time realistically.",
    },
  ];

  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gray-950 rounded-[25px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-12">
            What We Do
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
}
