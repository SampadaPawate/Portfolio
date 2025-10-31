import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Sparkles } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "React, Next.js, Node.js, TypeScript",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Deep Learning",
    },
    {
      icon: Sparkles,
      title: "Cloud & DevOps",
      description: "Scalable architectures, CI/CD, APIs",
    },
  ];

  return (
    <section id="about" className="py-32 gradient-subtle" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-4 tracking-wide">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
            Crafting Digital Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Computer Science graduate student at UT Arlington. Research Assistant specializing in modern web architectures and machine learning systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert in full-stack development, AI/ML, and scalable cloud solutions. Focused on transforming complex challenges into elegant, high-performance applications.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index + 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
