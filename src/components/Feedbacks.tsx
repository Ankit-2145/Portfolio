import React from "react";
import { testimonialsData } from "@/constants/feedbackslist";
import { TestimonialCarousel } from "@/components/ui/testimonials";

const Feedbacks: React.FC = () => {
  return (
    <section className="h-1/2 bg-white dark:bg-[#121212] font-OpenSans border-t-2 py-24 lg:py-32">
      <div className="max-w-6xl lg:mx-auto flex flex-col md:flex-row justify-center items-center gap-4 mx-4">
        <div>
          <h2 className="text-xl font-medium leading-relaxed">
            . . . /What People Say . . .
          </h2>
        </div>
      </div>
      <TestimonialCarousel
        testimonials={testimonialsData}
        className="max-w-2xl"
      />
    </section>
  );
};

export default Feedbacks;
