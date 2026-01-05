
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Vision-based Quality Control System",
    description: "Computer vision system for manufacturing quality control, capable of detecting defects with 99.2% accuracy.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "Computer Vision",
    technologies: ["PyTorch", "OpenCV", "Python", "Docker"],
    githubUrl: "https://github.com/aiwithviveka",
    liveUrl: "https://example.com"
  },
  {
    title: "Intelligent Customer Support Bot",
    description: "NLP-powered chatbot that handles customer inquiries and routes complex queries to human agents, reducing response time by 65%.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "NLP",
    technologies: ["BERT", "TensorFlow", "FastAPI", "AWS Lambda"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Predictive Maintenance System",
    description: "Time-series analysis system that predicts equipment failures before they occur, saving clients an average of $2.3M in yearly maintenance costs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Time Series",
    technologies: ["Prophet", "Pandas", "Flask", "Plotly"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Recommendation Engine",
    description: "Collaborative filtering system for e-commerce that increased average order value by 23% through personalized product recommendations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Recommender Systems",
    technologies: ["Scikit-learn", "FastAPI", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: null
  },
  {
    title: "Fraud Detection System",
    description: "Real-time transaction anomaly detection system with 97% accuracy in identifying fraudulent activities.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Anomaly Detection",
    technologies: ["XGBoost", "Kafka", "Spark", "Elasticsearch"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Medical Image Segmentation",
    description: "CNN-based system for automated medical image segmentation that helps radiologists identify tumors faster and more accurately.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Computer Vision",
    technologies: ["U-Net", "PyTorch", "DICOM", "TensorRT"],
    githubUrl: "https://github.com",
    liveUrl: null
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const sectionRef = useRef<HTMLElement>(null);

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects when filter changes
  useEffect(() => {
    if (filter === 'All') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  // Animation observer
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
    <section id="projects" ref={sectionRef} className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">
          Featured Projects
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 reveal">
          Explore a selection of my machine learning projects that showcase my expertise
          across different domains and technologies.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                filter === category
                  ? 'bg-sky-blue-500 text-snow-white'
                  : 'bg-light-gray text-dark-navy hover:bg-sky-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-snow-white rounded-lg shadow-lg overflow-hidden card-hover reveal"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-2 bg-sky-blue-500 text-xs text-snow-white">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 text-gray-700">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 text-xs bg-sky-blue-100 text-sky-blue-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm bg-dark-navy text-snow-white px-3 py-2 rounded-md hover:bg-sky-blue-800 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm bg-sky-blue-500 text-snow-white px-3 py-2 rounded-md hover:bg-sky-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
