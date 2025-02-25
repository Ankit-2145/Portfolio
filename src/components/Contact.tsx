import React from "react";
import { ContactForm } from "./ui/contactForm";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-black font-OpenSans py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-4 lg:mx-auto flex flex-col justify-between items-center">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            . . . /Have a Project? Let&apos;s Talk! . . .
          </h2>
        </div>

        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
