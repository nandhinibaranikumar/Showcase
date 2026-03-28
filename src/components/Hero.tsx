import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Download, MapPin } from "lucide-react";

const SUBTITLE = "Computer Science Student | Aspiring Software Developer";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const resumeHref = `${import.meta.env.BASE_URL}Resume.pdf`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedText(SUBTITLE.slice(0, index));

      if (index >= SUBTITLE.length) {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 bg-background">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm mb-3">Hello, I'm</p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground leading-tight mb-4 break-words max-w-xl">
            NANDHINI BARANIKUMAR
          </h1>
          <p className="text-lg text-white mb-2 min-h-[28px]">
            {typedText}
            <span className="ml-0.5 inline-block animate-pulse">|</span>
          </p>
          <p className="text-sm text-white mb-8 flex items-center gap-2">
            <MapPin size={16} />
            Chennai, India
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/nandhinibaranikumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Linkedin size={18} />
              Contact Me
            </a>
            <a
              href={resumeHref}
              download
              className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right - Code Box */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e]"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-white/40 font-mono">developer.js</span>
          </div>
          <div className="p-5 overflow-x-auto">
            <pre className="font-mono text-sm leading-7 text-white/80">
{`const developer = {
  name: "Nandhini Baranikumar",
  role: "Computer Science Student",
  location: "Chennai, India",
  skills: ["Java", "Python", "C++",
           "HTML", "CSS", "Bootstrap"],
  isPassionate: () => true
};`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


