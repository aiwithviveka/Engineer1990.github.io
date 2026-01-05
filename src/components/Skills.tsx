import React, { useRef, useEffect } from "react";

const skillCategories = [
  {
    name: "Programming & Scripting",
    skills: [
      "Python",
      "Bash",
      "JavaScript",
      "SQL",
      "Automation Scripts"
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "Linux",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions, Jenkins)",
      "AWS & Azure Basics"
    ]
  },
  {
    name: "Agentic AI & GenAI",
    skills: [
      "LLMs Fundamentals",
      "Prompt Engineering",
      "Agentic Workflows",
      "RAG Concepts",
      "AI Automation Use Cases"
    ]
  },
  {
    name: "Systems & Observability",
    skills: [
      "Git & GitHub",
      "Monitoring & Logging",
      "System Troubleshooting",
      "Basic Networking",
      "Production Support Mindset"
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".reveal");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center reveal">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm p-6 reveal"
            >
              <h3 className="font-semibold text-lg mb-4 text-apple-gray-900">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-apple-gray-700 text-base flex items-center"
                  >
                    <span className="mr-2 text-apple-blue-600">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
