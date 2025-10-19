import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import img04 from "../../assets/img/carousel01/img04.jpg";
import img05 from "../../assets/img/carousel01/img05.jpg";
import img06 from "../../assets/img/carousel01/img06.jpg";
import img07 from "../../assets/img/carousel01/img07.jpg";
import img08 from "../../assets/img/carousel01/img08.jpg";

export default function CarouselSection() {
  const [emblaRef] = useEmblaCarousel();
  const slides = [img04, img05, img06, img07, img08];

  return (
    <section
      className="mx-auto pl-6 md:pl-8 py-8 md:py-12 embla cursor-grab  overflow-hidden"
      ref={emblaRef}
    >
      <div className="embla__container flex gap-x-[6px]">
        {slides.map((src, i) => (
          <figure className="shrink-0 w-[320px] sm:w-[480px] md:w-[628px]">
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
    </section>
  );
}
