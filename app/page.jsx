import Image from "next/image";

// components
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Work /> */}
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
