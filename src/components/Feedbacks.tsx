import React from "react";
import { testimonialsData } from "@/constants/feedbackslist";
import { TestimonialCarousel } from "@/components/ui/testimonials";

const Feedbacks: React.FC = () => {
  return (
    <section className="h-1/2 bg-white dark:bg-black font-OpenSans py-24 lg:py-32">
      <div className="max-w-6xl lg:mx-auto flex flex-col md:flex-row justify-center items-center gap-4 mx-4">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            . . . /Words That Matter . . .
          </h2>
        </div>
      </div>
      <TestimonialCarousel
        testimonials={testimonialsData}
        className="max-w-2xl mx-auto mt-16 lg:mt-24"
      />
    </section>
  );
};

export default Feedbacks;
