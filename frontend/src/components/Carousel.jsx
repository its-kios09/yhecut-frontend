import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Carousel = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, interval]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel container with responsive height */}
      <div className="relative h-auto md:h-80 lg:h-96 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-xs md:text-sm lg:text-lg">
                    {slide.description}
                  </p>
                  <button
                    className="mt-4 bg-[#b83336] text-white px-4 py-2 rounded-full hover:bg-[#a12b29] transition-all"
                    onClick={() => {
                      window.location.href = "#";
                    }}
                  >
                    Shop & Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-2 md:px-3 md:py-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-2 md:px-3 md:py-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        ›
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval: PropTypes.number,
};

export default Carousel;
