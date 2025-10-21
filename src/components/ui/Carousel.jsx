import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

export function CarouselSection({ slides, paragraph }) {
  const [emblaRef] = useEmblaCarousel();

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
    <section
      className="mx-auto pl-6 md:pl-8 py-8 md:py-12 embla cursor-grab overflow-hidden"
      ref={emblaRef}
    >
      <motion.div
        className="embla__container flex gap-x-[6px] overflow-hidden"
        initial="hidden"
        whileInView="show"
        variants={container}
      >
        {slides.map((src, i) => (
          <motion.figure
            key={i}
            className="embla_slide shrink-0 w-[320px] sm:w-[480px] md:w-[628px]"
            variants={item}
          >
            <div className="aspect-[647/875] overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm text-black/70 text-right">
              {i + 1}/{slides.length}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
      <p
        className="whitespace-pre-line mt-10 text-xs leading-[1.25] text-black/80
               ml-[36.5vw] mr-[26vw] md:ml-[34vw] md:mr-[24vw] px-4"
      >
        {paragraph}
      </p>
    </section>
  );
}
