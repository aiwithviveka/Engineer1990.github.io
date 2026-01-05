import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    title: "Email",
    icon: Mail,
    details: ["viveka@example.com", "support@example.com"],
  },
  {
    title: "Phone",
    icon: Phone,
    details: ["+91 99593 28747"],
  },
  {
    title: "Address",
    icon: MapPin,
    details: ["Gurgaon, India"],
  },
  {
    title: "Message",
    icon: MessageSquare,
    details: ["Reach out via our contact form anytime!"],
  },
];

const ContactPage = () => (
  <section className="section bg-light-gray min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Contact & Connect
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {contactMethods.map((method, idx) => {
          const Icon = method.icon;
          return (
            <div
              key={idx}
              className="bg-snow-white rounded-lg shadow-lg p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4 text-sky-blue-700">
                <Icon size={22} />
                <h3 className="font-semibold text-xl text-dark-navy">
                  {method.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {method.details.map((detail, i) => (
                  <li key={i} className="text-dark-navy/80">
                    • {detail}
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

export default ContactPage;
