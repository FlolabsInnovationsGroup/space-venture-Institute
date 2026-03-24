import Image from "next/image";
import heroImage from "../../../../public/assets/updates/jurneyhero.jpg";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6  w-full h-[100vh] mt-20 overflow-hidden text-center bg-gray-950 transition-colors my-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />
      {/* Background Image */}

      <Image
        src={heroImage}
        fill
        className="object-cover  "
        alt="Space Ventures Institute"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black/60" />
      <div className="relative z-10 ">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#1a1a1a] dark:text-white">
          Space Ventures Institute
        </h1>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#1a1a1a] dark:text-white">
          Our Journey Forward
        </h1>

        <p className="text-xl text-white font-bold  max-w-2xl mx-auto mb-10">
          Advance your space career. Be at the center of the future.{" "}
          <span className="">Remote first</span>. Open to the world.
        </p>
        <p className="font-bold">
          A journey of <span className="text-[#2962FF]">real projects</span>,{" "}
          <span className="text-[#2962FF]">hands-on work</span>, and{" "}
          <span className="text-[#2962FF]">growth</span> in the space economy.
        </p>
      </div>

      {/* INITIATIVES BY NUMBERS */}
    </section>
  );
};

export default Hero;
