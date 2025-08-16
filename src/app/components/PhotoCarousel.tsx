"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PhotoCarouselProps {
  photos: string[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!photos.length) return null;

  return (
    <div className="w-full max-w-7xl lg:max-w-8xl xl:max-w-9xl 2xl:max-w-full mx-auto px-2 lg:px-4">
      {/* Carousel Container */}
      <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2] 2xl:aspect-[16/10] rounded-lg overflow-hidden border border-white/20 bg-white/5 min-h-[400px] lg:min-h-[600px] xl:min-h-[700px]">
        {/* Photo */}
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 lg:p-4 xl:p-5 rounded-full transition-all duration-200 z-10"
          aria-label="Previous photo"
        >
          <FaChevronLeft size={24} className="lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 lg:p-4 xl:p-5 rounded-full transition-all duration-200 z-10"
          aria-label="Next photo"
        >
          <FaChevronRight size={24} className="lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
        </button>
        
        {/* Photo Counter */}
        <div className="absolute top-2 lg:top-4 right-2 lg:right-4 bg-black/50 text-white px-3 py-2 lg:px-4 lg:py-3 xl:px-5 xl:py-4 rounded text-base lg:text-lg xl:text-xl">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 lg:mt-8 xl:mt-10 gap-3 lg:gap-4 xl:gap-5">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
