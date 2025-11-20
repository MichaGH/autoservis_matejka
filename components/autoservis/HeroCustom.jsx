"use client";

import Image from "next/image";

const HeroCustom = ({ title, text, image }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Pozadie */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Text */}
      <div className="text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-primary text-gray-100 mb-4">
          {title}
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-secondary mx-auto">
          {text}
        </p>
      </div>
    </section>
  );
};

export default HeroCustom;
