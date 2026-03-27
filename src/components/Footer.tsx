import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/nandhinibaranikumar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/nandhinibaranikumar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={20} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 Nandhini Sri B. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
