import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { ExternalLink, Rocket } from "lucide-react";

const Projects = () => (
  <SectionWrapper id="projects">
    <SectionTitle title="My" highlight="Projects" />
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Featured Project */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-black/10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-black">Featured Project</span>
        </div>
        <h3 className="text-2xl font-bold text-black mb-3">SustainHire</h3>
        <p className="text-black text-sm mb-5 leading-relaxed">
          A full-stack platform that connects students with sustainability-focused internships.
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="font-semibold text-black mr-1">Frontend:</span>
            {["HTML", "CSS", "Bootstrap", "JavaScript"].map((t) => (
              <span key={t} className="px-2 py-1 rounded bg-black/5 text-black">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="font-semibold text-black mr-1">Backend:</span>
            {["Node.js", "Express.js"].map((t) => (
              <span key={t} className="px-2 py-1 rounded bg-black/5 text-black">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="font-semibold text-black mr-1">Database:</span>
            <span className="px-2 py-1 rounded bg-black/5 text-black">MongoDB</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="font-semibold text-black mr-1">Deployment:</span>
            {["Netlify", "Render"].map((t) => (
              <span key={t} className="px-2 py-1 rounded bg-black/5 text-black">{t}</span>
            ))}
          </div>
        </div>
        <a
          href="https://sustainhiresoftware.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm bg-black text-white font-semibold hover:bg-black/80 transition-colors"
        >
          <ExternalLink size={16} />
          View Project
        </a>
      </div>

      {/* More Coming Soon */}
      <div className="bg-white rounded-xl p-6 text-center shadow-md border border-black/10">
        <Rocket size={28} className="text-black mx-auto mb-3" />
        <h4 className="font-semibold text-black mb-2">More Projects Coming Soon</h4>
        <p className="text-sm text-black/70">
          I am currently working on building more full-stack applications and expanding my portfolio.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default Projects;
