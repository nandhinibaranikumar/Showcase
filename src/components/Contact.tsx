import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Mail, MapPin } from "lucide-react";

const Contact = () => (
  <SectionWrapper id="contact">
    <SectionTitle title="Let's" highlight="Connect" />
    <div className="max-w-xl mx-auto text-center">
      <div className="bg-white rounded-2xl p-8 shadow-md border border-black/10">
        <p className="text-black mb-8">
          I'm currently looking for opportunities to grow as a developer. My inbox is always open for
          collaborations, internships, and discussions!
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-3 text-sm text-black">
            <Mail size={18} className="text-black/60" />
            nandhinibaranikumar@gmail.com
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-black">
            <MapPin size={18} className="text-black/60" />
            Surapet, Chennai – 600066
          </div>
        </div>
        <a
          href="mailto:nandhinibaranikumar@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-black text-white font-semibold hover:bg-black/80 transition-colors"
        >
          <Mail size={18} />
          Say Hello
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default Contact;
