import Image from "next/image";
import heroImage from "../../../../public/assets/space/Duck-ai-image-2026-02-16-09-20.jpeg";

export default function Hero() {
  return (
    <section className="w-full max-h-[100vh] overflow-hidden  my-8">
      <div className="w-full ">
        <div className="relative h-[500px] md:h-[600px] lg:h-[674px] rounded-[25px] w-full  flex items-center  ">
          {/* Background Image */}

          <Image
            src={heroImage}
            fill
            className="object-cover relative "
            alt="Space Ventures Institute"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col     py-10 px-8 md:px-12 lg:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-white leading-tight mb-4">
              Space Ventures Institute
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white max-w-[800px] leading-relaxed">
              Advance your space career. Be at the center of the future. Remote
              first, open to the world—a space sector venture studio and
              experiential learning institute where space, AI, robotics, and
              real projects meet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
