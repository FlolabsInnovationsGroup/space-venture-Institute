import Image from "next/image";
import heroImage1 from "../../public/assets/space/hero2.png";
import heroImage2 from "../../public/assets/space/hero3.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-[url('/assets/space/hero.jpg')] bg-cover bg-bottom bg-no-repeat w-full min-h-screen rounded-[25px] mt-20 lg:-mt-5 mb-8 ">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 px-6 sm:px-10 lg:px-16 pt-16 mt-4 lg:py-10">
        {/* LEFT */}
        <div className="flex flex-col gap-10 max-w-[650px] text-center lg:text-left ">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight text-white">
            Space Ventures Institute
          </h1>

          {/* Text */}
          <div className="flex flex-col gap-5 lg:gap-8  text-lg sm:text-xl lg:text-2xl text-white">
            <p>
              Advance your career. Be at the{" "}
              <span className="text-yellow-500 font-bold">
                center of the future.
              </span>
            </p>

            <p>
              <span className="text-yellow-500 font-bold">Remote first.</span>{" "}
              Open to the world.
            </p>

            <p>
              From textbooks to{" "}
              <span className="text-yellow-500 ">real-world impact.</span>
            </p>
          </div>

          {/* CTA */}
          <Link className="self-center"  href="https://hephaestus.international/internships">
            <button className="bg-blue-500 animate-bounce cursor-pointer  hover:text-white text-black text-lg sm:text-xl font-bold px-10 sm:px-14 py-4 rounded-[35px] transition hover:opacity-90 lg:mt-20 w-fit mx-auto lg:mx-0">
              Apply Now
            </button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative w-full max-w-[500px] h-[420px] sm:h-[500px] lg:h-[600px] mx-auto">
          {/* Main Image */}
          <div
            className="relative lg:absolute lg:left-16 lg:top-12 
                          w-[280px] sm:w-[350px] lg:w-[450px] 
                          h-[280px] sm:h-[350px] lg:h-[450px] 
                          mx-auto rounded-[30px] overflow-hidden shadow-2xl">
            <Image src={heroImage1} alt="Hero" fill className="object-cover" />
          </div>

          {/* Cards Wrapper */}
          <div
            className="flex gap-4 justify-center mt-6 
                lg:mt-0 lg:block">
            {/* Card 1 */}
            <div
              className="relative lg:absolute
               lg:top-10 lg:-right-12
               bg-white/20 backdrop-blur 
               rounded-[20px] px-4 py-3
               w-1/2 lg:w-[240px]">
              <p className="text-sm sm:text-base text-white text-center">
                Real space economy projects.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="relative lg:absolute
               lg:left-0 lg:bottom-14
               bg-white/20 backdrop-blur 
               rounded-[20px] px-4 py-3
               w-1/2 lg:w-[240px]">
              <p className="text-sm sm:text-base text-white text-center">
                Remote first, Join from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* this only for the color  */}
      {/* <span className="text-[#F2784B] text-[40px]  sm:text-[32px] font-bold"> */}
    </section>
  );
};

export default Hero;
