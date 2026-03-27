import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Star } from "lucide-react";

const achievements = [
  "Maintained strong academic performance with 9.35 CGPA in B.Sc Computer Science",
  "Actively learning Full Stack Development",
  "Passionate about building real-world software applications",
  "Continuously improving programming and development skills",
];

const Achievements = () => (
  <SectionWrapper id="achievements">
    <SectionTitle title="My" highlight="Achievements" />
    <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
      {achievements.map((item, i) => (
        <div key={i} className="bg-white rounded-xl p-5 flex gap-3 items-start shadow-sm border border-black/10 hover:shadow-md transition-shadow">
          <Star size={18} className="text-black mt-0.5 shrink-0" />
          <p className="text-sm text-black">{item}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Achievements;
