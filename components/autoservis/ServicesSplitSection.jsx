"use client";

import Image from "next/image";

const ServiceSplitSection = ({
  overline,          // small label above title
  title,             // main heading
  text,              // main paragraph
  imageSrc,
  imageAlt = "",
  imageOnLeft = false, // true = image left, text right
  sectionClassName = "bg-zinc-950", // allow override bg if needed
  children,          // optional extra JSX content under main text
}) => {
  return (
    <section className={`${sectionClassName} text-gray-100`}>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        {/* IMAGE SIDE */}
        <div
          className={`relative ${
            imageOnLeft ? "lg:order-1 order-2" : "lg:order-2 order-2"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
            <div className="aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10" />
          </div>
        </div>

        {/* TEXT SIDE */}
        <div
          className={`space-y-5 ${
            imageOnLeft ? "lg:order-2 order-1" : "lg:order-1 order-1"
          }`}
        >
          {overline && (
            <p className="text-[11px] font-semibold tracking-[0.25em] text-yellow-400 uppercase">
              {overline}
            </p>
          )}

          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary text-white leading-tight">
              {title}
            </h2>
          )}

          {text && (
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {text}
            </p>
          )}

          {/* Extra custom content (bullets, lists, whatever) */}
          {children && (
            <div className="space-y-4 text-sm sm:text-base text-gray-200">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSplitSection;
