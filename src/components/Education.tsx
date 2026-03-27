import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Sc Computer Science",
    period: "Present",
    institution: "M.O.P. Vaishnav College for Women (Autonomous), Chennai",
    score: "CGPA: 9.35",
  },
  {
    degree: "Higher Secondary Education (12th)",
    period: "2022 – 2024",
    institution: "Velammal Matriculation Higher Secondary School, Chennai",
    score: "Percentage: 93.7%",
  },
];

const Education = () => (
  <SectionWrapper id="education">
    <SectionTitle title="My" highlight="Education" />
    <div className="space-y-6 max-w-3xl mx-auto">
      {education.map((edu, i) => (
        <div key={i} className="bg-white rounded-xl p-6 flex gap-4 items-start border border-black/10 shadow-sm hover:shadow-md transition-shadow">
          <div className="mt-1 p-2 rounded-lg bg-black/5">
            <GraduationCap size={22} className="text-black" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h3 className="font-semibold text-black">{edu.degree}</h3>
              <span className="text-xs text-black/70 font-mono">{edu.period}</span>
            </div>
            <p className="text-sm text-black/70">{edu.institution}</p>
            <p className="text-sm text-black font-semibold mt-1">{edu.score}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Education;

