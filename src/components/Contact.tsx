import React from "react";
import Image from "next/image";
import { ContactForm } from "./ui/contactForm";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-[#121212] font-OpenSans border-t-2 py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-4 lg:mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-medium font-OpenSans">
            Let&apos;s Connect{" "}
          </h2>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
