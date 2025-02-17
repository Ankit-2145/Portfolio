import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/constants/feedbackslist";

export function FeedbacksCard() {
  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
