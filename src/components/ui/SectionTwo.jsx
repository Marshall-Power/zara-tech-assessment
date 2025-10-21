import * as motion from "motion/react-client";

export function SectionTwo({ imgSrc, description }) {
  return (
    <section className="mx-auto max-w-[1364px] px-2 md:px-[18px] my-12">
      <div className="grid gap-6 md:[grid-template-columns:1.8fr_1fr]">
        <figure>
          <motion.div
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "none" }}
            transition={{ duration: 1.2 }}
            className="aspect-[875/1081] overflow-hidden"
          >
            <img
              src={imgSrc}
              srcSet={`${imgSrc} 2x`}
              width={875}
              height={1081}
              alt=""
              className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        </figure>

        <div className="flex justify-end flex-col translate-y-[5%]">
          <p className="text-xs text-left w-full whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
