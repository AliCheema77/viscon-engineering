import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Services />
      <FeaturedProjects />
      <Stats />
      <About />
      <Certifications />
    </main>
  );
}
