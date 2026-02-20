import Image from "next/image";
import statue from "../../public/assets/space/maze1.jpeg";
import openDoor from "../../public/assets/space/maze2.png";

const Maze = () => {
  return (
    <section className="py-5 my-10 rounded-[20px]  bg-gray-950  relative transition-colors duration-300 ">
      <div className="w-full mx-auto ">
        <p className="text-gray-200 text-4xl leading-relaxed mb-2 underline font-bold text-center ">
          Why we exist
        </p>
        <div className="grid md:grid-cols-2 gap-8  dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* The Maze (Left Side) */}
          <div className="relative p-8  flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-80 rounded-[20px] overflow-hidden">
              <Image src={statue} alt="Statue" fill className="object-cover" />
            </div>
            <div className="relative z-10 text-center ">
              <h3 className="text-3xl font-bold text-white mb-4 tracking-[1px] leading-[150%] ">
                Most people who love space don't know how to get involved.{" "}
                <br />
                <span className="text-[#F2784B]">
                  Space jobs feel distant and gated.
                </span>
              </h3>

              <div className="text-gray-200 text-lg leading-relaxed mb-8 tracking-[1px] leading-[150%] ">
                Internships are <span className="text-[#F2784B]">limited</span>.
                Many roles require specific schools, locations, or{" "}
                <span className="text-[#F2784B]">networks</span>.
                <p className="tracking-[1px] leading-[150%]">
                  Meanwhile the space economy is expanding—tourism, robotics,
                  AI, content.{" "}
                  <span className="text-[#F2784B] tracking-[3px]">
                    There's a gap we're here to close.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* The Door (Right Side) */}
          <div className="relative p-12 flex flex-col justify-center overflow-hidden ">
            <div className="absolute inset-0 z-0 rounded-[20px] overflow-hidden">
              <Image
                src={openDoor}
                alt="Open Door"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 " />
            </div>
            <div className="relative z-10 text-center ">
              <h3 className=" text-3xl font-bold text-white mb-4 tracking-[1px] leading-[50px]  ">
                We close the gap by giving you{" "}
                <span className="text-[#F2784B]">real work</span> on real
                space-related products and services, exposure to space tourism,
                robotics, and content—and helping you build a{" "}
                <span className="text-[#F2784B]">portfolio</span> that connects
                directly to this growing sector.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maze;
