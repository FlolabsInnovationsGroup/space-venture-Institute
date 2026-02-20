import Image from "next/image";
import heroImage1 from "../../public/assets/space/hero2.png";
import heroImage2 from "../../public/assets/space/hero3.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-[url('/assets/space/hero.jpg')] bg-cover bg-bottom bg-no-repeat w-full min-h-screen rounded-[25px] mt-20 lg:-mt-5 mb-8 ">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 px-6 sm:px-10 lg:px-16 pt-16 mt-4 lg:py-10">
        {/* LEFT */}
        <div className="flex flex-col gap-6 max-w-[650px] text-center lg:text-left">
          {/* Badge */}
          <div className="flex items-center gap-3 bg-black rounded-[25px] shadow-md w-full mx-auto lg:mx-0 px-2 py-2">
            <div className="flex w-[200px] md:w-fit  items-center gap-2 px-3 py-2 bg-white/60 rounded-[25px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 17H13V11H11V17ZM12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z"
                  fill="black"
                />
              </svg>
              <span className="text-black text-sm font-medium">Update</span>
            </div>

            <span className="text-white text-sm sm:text-base px-2">
              Applications for 2026 are now open!
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight text-white">
            Space Ventures Institute
          </h1>

          {/* Text */}
          <div className="flex flex-col gap-5 text-lg sm:text-xl lg:text-2xl text-white">
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
              <span className="text-yellow-500 font-bold">
                real-world impact.
              </span>
            </p>

            <p>
              No frontiers.
              <span className="text-yellow-500 font-bold"> No limits.</span>
            </p>
          </div>

          {/* CTA */}
          <Link href="https://hephaestus.international/internships">
            <button className="bg-blue-500 animate-bounce cursor-pointer hover:text-white text-black text-lg sm:text-xl font-bold px-10 sm:px-14 py-4 rounded-[35px] transition hover:opacity-90 lg:mt-5 w-fit mx-auto lg:mx-0">
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
