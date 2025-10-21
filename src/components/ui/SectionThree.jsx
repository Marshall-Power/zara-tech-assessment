import * as motion from "motion/react-client";

export function SectionThree({ leftImgSrc, righImgSrc, description }) {
  const cardVariantsLeft = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const cardVariantsRight = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  return (
    <section className="mx-auto px-4 md:px-6 my-12">
      <div className="grid grid-cols-1 md:[grid-template-columns:0.4fr_0.6fr] gap-[70px] items-start">
        <motion.div initial="offscreen" whileInView="onscreen">
          <figure>
            <motion.div
              variants={cardVariantsLeft}
              viewport={{ amount: 0.8 }}
              className="aspect-[5/4] overflow-hidden"
            >
              <img
                src={leftImgSrc}
                srcSet={`${leftImgSrc} 2x`}
                width={657}
                height={533}
                alt=""
                className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
            <figcaption className="mt-16 text-xs max-w-[60%] text-black/80 text-left">
              {description}
            </figcaption>
          </figure>
        </motion.div>

        <figure>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            className="overflow-hidden"
          >
            <motion.div
              variants={cardVariantsRight}
              viewport={{ amount: 0.8 }}
              className="aspect-[5/4] overflow-hidden"
            >
              <img
                src={righImgSrc}
                srcSet={`${righImgSrc} 2x`}
                width={1031}
                height={802}
                alt=""
                className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </figure>
      </div>
    </section>
  );
}
