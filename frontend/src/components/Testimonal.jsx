import  { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Testimonial from "./Testimonial";

const TestimonialCarouselSimple = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Testimonial
        image={testimonials[current].image}
        name={testimonials[current].name}
        title={testimonials[current].title}
        testimonial={testimonials[current].testimonial}
      />
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

TestimonialCarouselSimple.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      testimonial: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestimonialCarouselSimple;