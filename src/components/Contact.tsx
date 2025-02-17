import React from "react";
import Image from "next/image";
import { ContactForm } from "./ui/contactForm";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-4 md:mx-auto text-center mt-24 lg:mt-32"
    >
      <div className="flex justify-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-medium font-OpenSans">
            Let&apos;s Connect{" "}
          </h2>
        </div>
        <div>
          <Image
            src="/memoji_laptop.svg"
            alt="skills memoji with laptop"
            width={36}
            height={36}
            className="w-[30px] h-[30px] md:w-9 md:h-9 ml-2"
          />
        </div>
      </div>
      <div className="my-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
