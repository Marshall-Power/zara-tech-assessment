import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

export function CarouselSection({ slides, paragraph }) {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 400 },
    show: {
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="mx-auto pl-6 md:pl-8 py-8 md:py-12 embla cursor-grab overflow-hidden"
      ref={emblaRef}
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      <div className="embla__container flex gap-x-[6px]" initial="hidden">
        {slides.map((src, i) => (
          <figure
            key={i}
            className="embla_slide shrink-0 w-[320px] sm:w-[480px] md:w-[628px]"
          >
            <div className="aspect-[647/875] overflow-hidden">
              <motion.img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:animate-pulse"
                loading="lazy"
                variants={item}
              />
            </div>
            <figcaption className="mt-2 text-sm text-black/70 text-right">
              {i + 1}/{slides.length}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="whitespace-pre-line mt-10 text-xs text-black/80px-4 md:ml-[40%]">
        {paragraph}
      </p>
    </motion.section>
  );
}
