import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Digital Application Fundamentals - STEM (NASSCOM)",
    pdf: "certificates/digital-application-fundamentals.pdf",
  },
  {
    title: "Google Cloud - Generative AI (NASSCOM)",
    pdf: "certificates/google-cloud-generative-ai.pdf",
  },
  {
    title: "Python Certification - NIIT Anna Nagar",
    pdf: "certificates/python-certificate.pdf",
  },
  {
    title: "MySQL Certification - NIIT Anna Nagar",
    pdf: "certificates/mysql-certificate.pdf",
  },
  {
    title: "Java Certification - NIIT Anna Nagar",
    pdf: "certificates/java-certificate.pdf",
  },
];

const Certifications = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <SectionWrapper id="certifications">
      <SectionTitle title="My" highlight="Certifications" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certs.map((cert, i) => (
          <a
            key={i}
            href={`${baseUrl}${cert.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 border border-black/10 shadow-sm hover:shadow-md transition-all text-center block hover:-translate-y-0.5"
          >
            <Award size={28} className="text-black mx-auto mb-4" />
            <p className="text-sm text-black font-medium">{cert.title}</p>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
