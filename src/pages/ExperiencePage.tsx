import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Jio Infotech",
    position: "Senior Operations Engineer",
    period: "2022 - 2024",
    location: "Gurgaon, India",
    description: "Managed production IT systems and cloud infrastructure, implemented automation for application support, and ensured high availability of critical services.",
    achievements: [
      "Monitored and maintained critical production systems with 99.9% uptime.",
      "Automated repetitive operational tasks using Python and Bash scripts, reducing manual effort by 40%.",
      "Implemented incident management and troubleshooting procedures, reducing mean time to resolution (MTTR) by 25%.",
      "Worked closely with DevOps teams for CI/CD pipeline optimization and infrastructure management on AWS and Azure."
    ],
    skills: ["Linux", "AWS", "Azure", "Python", "Shell Scripting", "Monitoring", "CI/CD", "Incident Management"]
  },
  {
    company: "Vanna Infotech",
    position: "Application Support Engineer",
    period: "2020 - 2022",
    location: "Bangalore, India",
    description: "Provided end-to-end support for enterprise applications, troubleshooting issues, and collaborating with development teams to implement fixes and updates.",
    achievements: [
      "Resolved over 200 critical application issues, improving overall service reliability.",
      "Created monitoring dashboards using Grafana and Prometheus to proactively detect system anomalies.",
      "Documented SOPs and operational procedures to streamline team workflows.",
      "Supported multiple cross-functional teams in production deployments and patch management."
    ],
    skills: ["Application Support", "Linux", "SQL", "Grafana", "Prometheus", "Python", "Troubleshooting", "Documentation"]
  },
  {
    company: "Vaivu ResourceQ Services Pvt Ltd",
    position: "Operations Engineer",
    period: "2018 - 2020",
    location: "Hyderabad, India",
    description: "Handled system administration, infrastructure maintenance, and supported cloud and on-premise deployments for enterprise clients.",
    achievements: [
      "Implemented automated backup and recovery processes, reducing downtime risk.",
      "Performed root cause analysis for recurring incidents and provided long-term solutions.",
      "Configured and managed monitoring tools to track server health and performance.",
      "Assisted in migrating legacy systems to cloud environments, improving scalability."
    ],
    skills: ["Linux", "Windows Server", "Cloud Computing", "Automation", "Monitoring", "Troubleshooting"]
  },
  {
    company: "Mallareddy College of Engineering for Women",
    position: "System Engineer Intern",
    period: "2017 - 2018",
    location: "Hyderabad, India",
    description: "Worked on IT support tasks, system configuration, and assisting faculty with lab and server management.",
    achievements: [
      "Maintained lab systems and ensured proper software installation for student projects.",
      "Assisted in configuring servers and networking for academic purposes.",
      "Supported day-to-day IT operations and troubleshooting."
    ],
    skills: ["IT Support", "System Configuration", "Networking", "Windows", "Linux"]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-snow-white rounded-lg shadow-lg overflow-hidden reveal"
            >
              <div className="md:flex">
                {/* Left section with company info */}
                <div className="md:w-1/3 bg-sky-blue-100 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-dark-navy">{exp.company}</h3>
                    <h4 className="text-lg font-semibold text-sky-blue-700 mb-4">{exp.position}</h4>
                    
                    <div className="flex items-center text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-sky-blue-500" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-sky-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Skills Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="inline-block px-2 py-1 text-xs bg-sky-blue-500 text-snow-white rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right section with description and achievements */}
                <div className="md:w-2/3 p-6">
                  <p className="mb-4">{exp.description}</p>
                  
                  <h5 className="font-semibold mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex">
                        <span className="text-sky-blue-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
