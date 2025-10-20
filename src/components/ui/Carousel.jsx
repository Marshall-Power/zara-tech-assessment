import useEmblaCarousel from "embla-carousel-react";

export default function CarouselSection({ slides, paragraph }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section
      className="mx-auto pl-6 md:pl-8 py-8 md:py-12 embla cursor-grab  overflow-hidden"
      ref={emblaRef}
    >
      <div className="embla__container flex gap-x-[6px]">
        {slides.map((src, i) => (
          <figure
            key={i}
            className="embla_slide shrink-0 w-[320px] sm:w-[480px] md:w-[628px]"
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
              01/05
            </figcaption>
          </figure>
        ))}
      </div>
      <p
        className="whitespace-pre-line mt-10 text-xs leading-[1.25] text-black/80
               ml-[36.5vw] mr-[26vw] md:ml-[34vw] md:mr-[24vw] px-4"
      >
        {paragraph}
      </p>
    </section>
  );
}
