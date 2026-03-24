import Image from "next/image";
import maze2Img from "../../../public/assets/space/maze2.png";
import experientialImg from "../../../public/assets/updates/spacetravel.jpg";
import grantingImg from "../../../public/assets/space/granting.jpg";
import digitalImg from "../../../public/assets/space/digitalImg.png";
import spaceMediaImg from "../../../public/assets/space/team.png";
import humanoidImg from "../../../public/assets/space/humaniod.png";
import CAIPOSpaceBuddyImg from "../../../public/assets/space/journey.png";
import modechangerImg from "../../../public/assets/space/modechanger.jpg";

export default function page() {
  return (
    <main className="bg-gray-950 rounded-[16px] px-4 md:px-6 py-4 mt-[100px] mb-[80px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-[56px] font-semibold text-white mb-4 md:mb-6">
            What We Are Building Right Now
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-[190%]">
            These are the types of projects active around Space Ventures
            Institute, real clusters of activity that participants can plug
            into.
          </p>
        </div>

        <div className="space-y-24">
          {/* 1 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              1. CAIPO as a Space Buddy
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Exploring how the CAIPO wearable AI assistant can function as a
              Space Buddy for different audiences:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Support and guidance for space tourists and people joining
                space-themed training or experiences.
              </li>
              <li>
                Companion, information, and coaching concepts for analog
                astronauts and training environments.
              </li>
              <li>
                Long-term vision for how a Space Buddy could assist future crews
                or travelers in more extreme settings.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={CAIPOSpaceBuddyImg}
                alt="CAIPO Space Buddy"
                className="object-cover"
                priority
                fill
              />
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              2. CAIPO Space Buddy as a Consumer App and Space Inspiration Feed
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Researching how CAIPO can also exist as a consumer-facing app
              that:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Curates space news, discoveries, and mission updates in an
                inspiring, digestible way.
              </li>
              <li>
                Acts as a personal space guide that surfaces daily or weekly
                space insights.
              </li>
              <li>
                Bridges entertainment, education, and career inspiration for
                people who want space in their everyday lives.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={maze2Img}
                alt="CAIPO Consumer App"
                className="object-cover"
                priority
                fill
              />
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              3. MoodChanger for Space Health and Wellbeing
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Adapting MoodChanger, a platform for human performance and
              emotional wellbeing, to space-related use cases:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Stress, mood, and energy tracking for people in demanding
                space-adjacent jobs.
              </li>
              <li>
                Wellbeing tools for space tourism customers and training
                programs.
              </li>
              <li>
                Long-term concepts for mental health support in analog or future
                space environments.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={modechangerImg}
                alt="MoodChanger"
                className="object-cover"
                priority
                fill
              />
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              4. Space Travel Agency and Space Tourism Marketplace
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Building an online, remote-first Space Travel Agency that:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Curates and sells existing and upcoming space tourism and
                space-themed travel experiences.
              </li>
              <li>
                Explains clearly what is real today, what is near-term, and what
                is still speculative.
              </li>
              <li>
                Uses strong storytelling, design, and user experience to help
                customers understand and choose offerings.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={experientialImg}
                alt="Space Travel Agency"
                className="object-cover"
                priority
                fill
              />
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              5. Humanoid and Robotic Platforms, plus RoboCollective.ai
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Developing and exploring robotic platforms with a space angle:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Internal development of a humanoid robot and exploration of
                other robot types that can play roles in space and
                space-adjacent environments.
              </li>
              <li>
                Reselling and integrating robots through RoboCollective.ai,
                including positioning them for education and entertainment.
              </li>
              <li>
                Connecting robotics work to the Space Ventures narrative so
                learners see how embodied AI and robotics intersect with space.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={humanoidImg}
                alt="Robotics Platforms"
                className="object-cover "
                priority
                fill
              />
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              6. Space Media, Conferences, and Online Events
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Designing an online Space Ventures Conference and related content:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Events that focus on the intersection of space, AI, robotics,
                health, and travel.
              </li>
              <li>
                Digital formats that highlight early-stage founders,
                researchers, students, and creators.
              </li>
              <li>
                A year-round content strategy that can connect to CAIPO Space
                Buddy as a space inspiration channel.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={spaceMediaImg}
                alt="Space Media"
                className="object-cover"
                priority
                fill
              />
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              7. Websites, Brand, and Digital Presence
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Working continuously on:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Improving and creating websites for Space Ventures Institute,
                the Space Travel Agency, RoboCollective.ai, and related
                projects.
              </li>
              <li>
                Developing landing pages, funnels, and onboarding flows that
                turn interest into participation or bookings.
              </li>
              <li>
                Experimenting with copy, design, and storytelling that make
                space feel both inspiring and accessible.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={digitalImg}
                alt="Websites and Brand"
                className="object-cover"
                priority
                fill
              />
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl md:text-[32px] font-semibold text-white mb-6">
              8. Grants, Funding, and Partnerships
            </h2>

            <p className="text-lg md:text-xl text-white mb-4">
              Researching and applying for:
            </p>

            <ul className="text-lg md:text-xl text-white leading-[170%] mb-8 list-disc list-outside pl-6 space-y-3">
              <li>
                Grants and funding opportunities that align with space, AI,
                robotics, health, and education.
              </li>
              <li>
                Partnerships with universities, research labs, space-related
                organizations, and space tourism providers.
              </li>
              <li>
                Collaboration models where students, career changers, and Space
                Ventures participants can contribute to funded initiatives.
              </li>
            </ul>

            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src={grantingImg}
                alt="Grants and Partnerships"
                className="object-cover"
                priority
                fill
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
