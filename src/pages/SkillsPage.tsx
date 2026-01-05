import React from "react";
import { Code, Cloud, Cpu, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Automation",
    icon: Code,
    skills: ["Python", "Bash", "JavaScript", "SQL", "Automation Scripts"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Linux", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Agentic AI & GenAI",
    icon: Cpu,
    skills: ["LLM Basics", "Prompt Engineering", "RAG Concepts", "Agentic Workflows"],
  },
  {
    title: "Systems & Observability",
    icon: Monitor,
    skills: ["Git & GitHub", "Monitoring", "Logging", "Troubleshooting"],
  },
];

const SkillsPage = () => (
  <section className="section bg-light-gray min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Skills & Expertise
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={idx}
              className="bg-snow-white rounded-lg shadow-lg p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4 text-sky-blue-700">
                <Icon size={22} />
                <h3 className="font-semibold text-xl text-dark-navy">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-dark-navy/80">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsPage;
