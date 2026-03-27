import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Globe } from "lucide-react";

const About = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About" highlight="Me" />
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
      <p className="text-foreground leading-relaxed text-base">
          I am a B.Sc Computer Science student passionate about programming, full-stack development, and building meaningful software solutions.
          <br /><br />
          I enjoy learning modern technologies and applying them to real-world problems.
          <br /><br />
          My goal is to grow as a software developer while contributing innovative and impactful solutions in the tech industry.
        </p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-black/10">
        <div className="flex items-center gap-2 mb-4">
          <Globe size={20} className="text-black" />
          <h3 className="font-semibold text-black">Languages</h3>
        </div>
        <ul className="space-y-2 text-sm text-black">
          <li className="flex justify-between">
            <span>Tamil</span>
            <span className="font-semibold">Native</span>
          </li>
          <li className="flex justify-between">
            <span>English</span>
            <span className="font-semibold">Professional</span>
          </li>
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default About;
