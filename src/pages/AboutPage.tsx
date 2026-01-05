import React from "react";
import { User } from "lucide-react";

const AboutPage = () => (
  <section className="section bg-light-gray min-h-screen">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        About Me
      </h2>

      <div className="bg-snow-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6 text-sky-blue-700">
          <User size={24} />
          <h3 className="text-xl font-semibold text-dark-navy">
            Viveka Sharma
          </h3>
        </div>

        <p className="text-dark-navy/80 mb-4 leading-relaxed">
          I am an Aspiring DevOps & Cloud Engineer with a strong foundation in
          systems, automation, and production support. I enjoy working at the
          intersection of infrastructure, reliability, and intelligent systems.
        </p>

        <p className="text-dark-navy/80 mb-4 leading-relaxed">
          My current focus is on DevOps practices, cloud-native tooling, CI/CD
          pipelines, and exploring how Agentic AI can simplify operational
          workflows and improve developer productivity.
        </p>

        <p className="text-dark-navy/80 leading-relaxed">
          Alongside engineering, I actively create technical content, mentor
          beginners, and share practical insights on AI, DevOps, and career
          growth through blogs and talks.
        </p>
      </div>
    </div>
  </section>
);

export default AboutPage;
