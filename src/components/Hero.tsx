import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const fullName = "Viveka Sharma";

  const titles = [
    "Aspiring DevOps & Cloud Engineer",
    "Agentic AI Enthusiast",
    "Technical Content Creator & Mentor"
  ];

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 140);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-apple-gray-900/40 to-apple-gray-900/40 z-10" />
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster="/placeholder.svg"
          playsInline
          muted
          loop
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-and-science-slides-9033-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 text-apple-white tracking-tight">
            <span>{displayText}</span>
            <span className="animate-blink">|</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-apple-white">
            {titles[currentTitleIndex]}
          </h2>

          <p className="text-xl max-w-2xl mx-auto mb-10 text-apple-white/90 font-light leading-relaxed">
            Building reliable systems by blending DevOps practices, cloud platforms,
            automation, and intelligent AI workflows.
          </p>

          <div className="flex justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a
              href="#projects"
              className="btn-outline border-apple-white text-apple-white hover:bg-apple-white/10"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-apple-white flex flex-col items-center">
          <span className="mb-2 text-sm font-light">Scroll Down</span>
          <ArrowDown className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
