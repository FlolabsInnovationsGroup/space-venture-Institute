import React from "react";

const WhoFor = () => {
  const items = [
    {
      title: "Space majors & STEM students",
      description: "You want startup and product experience tied to space.",
    },
    {
      title: "Career changers",
      description:
        "From software, data, design, marketing, or operations ,you want to pivot into the space sector.",
    },
    {
      title: "Founders & aspiring founders",
      description:
        "You want to explore space-related product ideas inside a functioning venture studio.",
    },
    {
      title: "Lifelong learners",
      description:
        "You are serious about contributing and willing to take responsibility for outcomes. You do not need the perfect background; you do need curiosity, initiative, and a willingness to execute.",
    },
  ];

  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gray-950 rounded-[25px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-12">
            Who This’s For
          </h2>
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
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

export default WhoFor;
