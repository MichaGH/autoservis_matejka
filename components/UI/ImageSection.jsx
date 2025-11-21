"use client";

import Image from "next/image";

const ImageSection = ({
  title,
  description,
  imageSrc,
  imageAlt = "Homepage image",
  reverse = false,
}) => {
  return (
    <section className="bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:gap-16 md:grid-cols-2 items-center">
          {/* Text block */}
          <div
            className={`space-y-5 ${
              reverse ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              {title}
            </h2>

            <div className="h-1 w-full rounded-full bg-yellow-400" />

            <p className="text-sm sm:text-base text-gray-300 whitespace-pre-line leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image block */}
          <div
            className={`${
              reverse ? "md:order-1 md:pr-4" : "md:order-2 md:pl-4"
            }`}
          >
            <div className="group relative overflow-hidden rounded-sm border border-yellow-400/25 bg-zinc-900/60">
              <div className="aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
