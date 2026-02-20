import DoYou from "@/components/DoYou";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import JoinUs from "@/components/JoinUs";
import Maze from "@/components/Maze";
import OurProjectsCarosal from "@/components/OurProjectsCarosal";
import WeDo from "@/components/WeDo";
import WeDonot from "@/components/WeDonot";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Main Content Container */}
      <main className="max-w-[1440px] mx-auto px-6 pt-4">
        {/* Hero Section */}

        <Hero />
        {/* Why Choose Us Section */}

        <WhyChooseUs />
        <Maze />
        {/* <WeDo /> */}

        {/* Initiatives By the Numbers */}

        <Initiatives />

        {/* What We Offer */}

        <WhatWeOffer />

        {/* Built for Doers */}

        <WhoWeServe />

        {/* Our Projects Carousel */}

        <OurProjectsCarosal />

        {/* Join us on this Journey */}
        <JoinUs />

        {/* Final CTA Section */}
        <WeDonot />

        <DoYou />
      </main>
    </div>
  );
}
