import MilestoneCard from "./MilestoneCard";

const MileStone = () => {
  return (
    <section className="py-10 px-6 bg-gray-950 mt-10   ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl underline font-extrabold mb-4 text-[#1a1a1a] dark:text-white">
            Key Milestones & Focus
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <MilestoneCard
            title="Space Ventures Institute"
            desc="A venture studio and experiential learning institute focused on real, near-term space opportunities, where participants learn by building and shipping."
          />
          <MilestoneCard
            title="CAIPO as Space Buddy"
            desc="Exploring how the wearable AI assistant can support space tourists, analog astronauts, and future crews, plus a consumer app and space inspiration feed."
          />
          <MilestoneCard
            title="Space Travel Agency & MoodChanger for Space"
            desc="Building an online Space Travel Agency and adapting MoodChanger for space health and wellbeing real products and experiences in the space economy."
          />
          <MilestoneCard
            title="Humanoid & Robotics + RoboCollective.ai"
            desc="Developing and exploring robotic platforms with a space angle. <br/>  reselling and integrating through RoboCollective.ai <br/>  connecting robotics to the Space Ventures narrative."
          />
        </div>
      </div>
    </section>
  );
};

export default MileStone;
