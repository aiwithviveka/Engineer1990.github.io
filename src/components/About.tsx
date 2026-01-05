
import React, { useEffect, useRef } from 'react';
import { Award, Book, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
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
              }, 200 * index); // stagger animation
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center reveal">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal">
            <div className="relative overflow-hidden rounded-2xl shadow-apple-md">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Machine Learning Engineer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-apple-gray-900/70 to-transparent flex flex-col justify-end p-8 text-apple-white">
                <h3 className="text-xl font-medium mb-2">Viveka Sharma</h3>
                <p className="text-sm font-light">Agentic AI Specialist</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-apple-gray-50 p-5 rounded-xl flex items-center reveal">
                <Award className="w-5 h-5 mr-3 text-apple-blue-600" />
                <div>
                  <h4 className="font-medium text-sm">Experience</h4>
                  <p className="text-apple-gray-800">4+ Years</p>
                </div>
              </div>
              <div className="bg-apple-gray-50 p-5 rounded-xl flex items-center reveal">
                <Book className="w-5 h-5 mr-3 text-apple-blue-600" />
                <div>
                  <h4 className="font-medium text-sm">Education</h4>
                  <p className="text-apple-gray-800">M.Tech Computer Science</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-medium mb-6 mt-8 reveal">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4 reveal">
              <a 
                href="https://www.linkedin.com/in/aiwithviveka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-apple-gray-50 p-4 md:p-5 rounded-xl flex items-center hover:bg-apple-gray-100 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 mr-3 text-apple-blue-600" />
                <span className="text-apple-gray-800 text-sm">LinkedIn</span>
              </a>
              <a 
                href="http://github.com/aiwithviveka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-apple-gray-50 p-4 md:p-5 rounded-xl flex items-center hover:bg-apple-gray-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 mr-3 text-apple-blue-600" />
                <span className="text-apple-gray-800 text-sm">GitHub</span>
              </a>
              <a 
                href="https://medium.com/@aiwithviveka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-apple-gray-50 p-4 md:p-5 rounded-xl flex items-center hover:bg-apple-gray-100 transition-colors"
                aria-label="Medium Blog"
              >
                <Mail className="w-5 h-5 mr-3 text-apple-blue-600" />
                <span className="text-apple-gray-800 text-sm">Medium</span>
              </a>
              <a 
                href="https://x.com/aiwithviveka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-apple-gray-50 p-4 md:p-5 rounded-xl flex items-center hover:bg-apple-gray-100 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5 mr-3 text-apple-blue-600" />
                <span className="text-apple-gray-800 text-sm">X/Twitter</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-6 reveal">Who I am</h3>
            <p className="mb-4 reveal text-apple-gray-800 leading-relaxed">
              Bhargav is a seasoned Machine Learning Engineer and AI specialist with extensive experience across the machine learning solutions lifecycle. Currently, at Fractal Analytics, he architects and implements end-to-end ML pipelines using GCP services like Dataproc, Apache Spark, and BigQuery to deliver scalable, reliable data solutions.
            </p>
            <p className="mb-4 reveal text-apple-gray-800 leading-relaxed">
              Previously, as Junior Staff AI Engineer at Detect Technologies, Bhargav specialized in developing cutting-edge software engineering and MLOps products, leveraging Python, TensorFlow, Kubernetes, and AWS to build scalable applications with deep learning at their core.
            </p>
            <p className="mb-4 reveal text-apple-gray-800 leading-relaxed">
              At Truminds Software System, he led various machine learning initiatives, including computer vision model benchmarking and AI-OPS platform development, using technologies like PyTorch, ONNX, Docker, Apache Kafka, TensorRT, and AWS.
            </p>
            <p className="mb-6 reveal text-apple-gray-800 leading-relaxed">
              A passionate advocate for knowledge sharing in AI and machine learning, Bhargav frequently speaks at industry events, mentors at hackathons, and has published three research papers at international conferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
