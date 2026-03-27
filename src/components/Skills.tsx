import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Code, Layout, Database, GitBranch, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={20} className="text-black" />,
    skills: ["Java", "Python", "C++"],
  },
  {
    title: "Web Technologies",
    icon: <Layout size={20} className="text-black" />,
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Development",
    icon: <Database size={20} className="text-black" />,
    skills: ["Full Stack Development Basics", "Database Management", "Computer Architecture"],
  },
  {
    title: "Tools",
    icon: <GitBranch size={20} className="text-black" />,
    skills: ["Git", "GitHub"],
  },
  {
    title: "Soft Skills",
    icon: <Users size={20} className="text-black" />,
    skills: ["Problem Solving", "Communication", "Teamwork"],
  },
];

const Skills = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="My" highlight="Skills" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((cat, i) => (
        <div key={i} className="bg-white rounded-xl p-6 border border-black/10 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-black/5 group-hover:bg-black/10 transition-colors">
              {cat.icon}
            </div>
            <h3 className="font-semibold text-black text-sm">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full bg-black/5 text-black"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
