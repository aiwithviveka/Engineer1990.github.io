import React, { useRef, useState, useEffect } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-snow-white shadow-lg rounded-lg p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue-500"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue-500"
                  placeholder="Project / Collaboration Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue-500"
                  placeholder="I'd like to discuss potential project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-blue-500 text-snow-white py-3 px-6 rounded-md hover:bg-sky-blue-600 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <div className="mb-12 reveal">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-6">
                Hi! I'm Viveka Sharma, Senior Operations Engineer & aspiring DevOps/Cloud Engineer. 
                Feel free to reach out for collaboration, consulting, or AI/DevOps projects.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-sky-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:vivekasharma01@gmail.com" className="text-sky-blue-500 hover:underline">
                      vivekasharma01@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-sky-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>Gurgaon, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-sky-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>+91-9959328747</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <h3 className="text-2xl font-bold mb-6">Availability</h3>
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="font-semibold">Currently Available for New Projects</span>
                </div>
                <p>
                  I'm available for consultation and project work. Typical response time: within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
