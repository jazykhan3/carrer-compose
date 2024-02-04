import About from '../components/About';
import Achievments from "../components/Achievements";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Interests from "../components/Interests";
import Languages from "../components/Languages";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";
import Skills from "../components/Skills";
import Volunteering from "../components/Volunteering";



export default function Home() {
  return (
<div>
  <Hero />
  <About />
  <Experience />
  <Education />
  <Achievments />
  <Projects />
  <Volunteering />
  <Skills />
  <Languages />
  <Recommendations />
  <Interests />
</div>
  );
}
