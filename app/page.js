import About from "@/components/About";
import Achievments from "@/components/Achievements";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
<div>
  <Hero />
  <About />
  <Experience />
  <Education />
  <Achievments />
  <Projects />
</div>
  );
}
