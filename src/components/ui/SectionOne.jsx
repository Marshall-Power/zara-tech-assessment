import * as motion from "motion/react-client";

export function SectionOne({ imgSrc, columns, description }) {
  return (
    <section className="mx-auto max-w-[1552px] px-6 md:px-8 py-8 md:py-12">
      <div className="grid gap-6 md:gap-8 grid-cols-1 lg:[grid-template-columns:1fr_1fr_1fr_2.15fr]">
        {columns.map((text, i) => {
          return (
            <div key={i} className="min-h-[200px] flex items-center">
              <p className="text-xs leading-[1.25]">{text}</p>
            </div>
          );
        })}

        <figure className="flex flex-col">
          <img
            width={648}
            height={800}
            src={imgSrc}
            srcSet={`${imgSrc} 2x`}
            sizes="(min-width: 1552px) 647px, (min-width: 1024px) 40vw, 100vw"
            alt=""
            className="block w-full h-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            loading="eager"
          />
          <figcaption className="whitespace-pre-line ml-auto mt-3 text-xs text-black/70 text-right">
            {description}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
