"use client";
import { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface CarouselProps {
  images: { src: string | StaticImageData; name: string }[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (hovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [hovered, nextSlide]);

  return (
    <div className="relative w-full max-w-[163px] mx-auto">
      <div
        className="relative w-full overflow-x-hidden scrollbar-hide group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full rounded-tl-[50px] rounded-tr-[10px]">
              <Image
                src={image.src}
                alt={image.name}
                className="object-cover rounded-tl-[50px] rounded-tr-[10px] w-full h-[155px]"
                style={{ maxWidth: "163px", minWidth: "163px", height: "155px" }}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 opacity-0 text-blue-500 transition flex w-6 h-10 items-center justify-center shrink-0 bg-white/50 backdrop-blur-[11.3px] group-hover:opacity-100 rounded-tr-[10px] rounded-br-[10px]"
          onClick={prevSlide}
        >
          <ChevronLeft sx={{ fontSize: "16px" }} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 opacity-0 text-blue-500 transition flex w-6 h-10 items-center justify-center shrink-0 bg-white/50 backdrop-blur-[11.3px] group-hover:opacity-100 rounded-tl-[10px] rounded-bl-[10px]"
          onClick={nextSlide}
        >
          <ChevronRight sx={{ fontSize: "16px" }} />
        </button>
        <div className="flex justify-center space-x-1 mt-1 absolute bottom-1 left-[42%] opacity-0 transition-opacity carousel-dots group-hover:opacity-100">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === index ? "bg-blue-500 w-1.5" : "bg-[#CFD9E4] w-1.5"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}