import React, { useRef, useEffect } from "react";
import { Briefcase, Clock, Award, BookOpen } from "lucide-react";

const experiences = [
  {
    title: "Senior Operations Engineer",
    company: "Jio Infotech",
    duration: "Jan 2022 – Jun 2024",
    description: "Managed cloud infrastructure, CI/CD pipelines, and automation workflows.",
    icon: Briefcase,
  },
  {
    title: "Application Support Engineer",
    company: "Vanna Infotech",
    duration: "Jul 2020 – Dec 2021",
    description: "Provided L2/L3 support for enterprise applications and monitored system health.",
    icon: Clock,
  },
  {
    title: "DevOps Intern",
    company: "Vaivu ResourceQ Services Pvt Ltd",
    duration: "Jan 2020 – Jun 2020",
    description: "Assisted in building CI/CD pipelines and containerized applications using Docker.",
    icon: Award,
  },
  {
    title: "Research Assistant",
    company: "Mallareddy College of Engineering for Women",
    duration: "Jul 2018 – Dec 2019",
    description: "Worked on academic projects related to software engineering and cloud solutions.",
    icon: BookOpen,
  },
];

const ExperiencePage = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section bg-light-gray min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">
          My Professional Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="bg-snow-white rounded-lg shadow-lg p-6 reveal card-hover"
              >
                <div className="flex items-center gap-3 mb-4 text-sky-blue-700">
                  <Icon size={22} />
                  <h3 className="font-semibold text-xl text-dark-navy">
                    {exp.title}
                  </h3>
                </div>
                <p className="font-medium text-dark-navy/80 mb-2">{exp.company}</p>
                <p className="text-dark-navy/70 mb-4">{exp.duration}</p>
                <p className="text-dark-navy/80">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
