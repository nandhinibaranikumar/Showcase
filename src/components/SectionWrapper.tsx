import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SectionWrapper = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} ref={ref} className={`section-padding ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionTitle = ({ title, highlight }: { title: string; highlight?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold">
      {title} {highlight && <span className="font-extrabold">{highlight}</span>}
    </h2>
    <div className="mt-3 mx-auto w-20 h-1 rounded-full bg-current opacity-30" />
  </div>
);

export default SectionWrapper;
