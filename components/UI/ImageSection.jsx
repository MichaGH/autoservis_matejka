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
    <section className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-10">
      <div
        className={`flex-1 space-y-6 ${
          reverse ? "md:order-2 text-right md:text-left" : "md:order-1 text-left"
        }`}
      >
        <h2 className="text-4xl font-bold text-white ">{title}</h2>
        <p className="text-gray-300 text-lg whitespace-pre-line">{description}</p>
      </div>

      <div className={`flex-1 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default ImageSection;
