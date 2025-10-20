import * as motion from "motion/react-client";

import img09 from "../../assets/img/section3/img09.jpg";
import img11 from "../../assets/img/section3/img11.jpg";

export default function SectionThree() {
  const cardVariantsLeft = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
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
        duration: 1.2,
      },
    },
  };

  return (
    <section className="mx-auto max-w-[1364px] px-4 md:px-6 my-12">
      <div className="grid grid-cols-1 md:[grid-template-columns:0.4fr_0.6fr] gap-[80px] items-start">
        <motion.div initial="offscreen" whileInView="onscreen">
          <figure>
            <motion.div
              variants={cardVariantsLeft}
              viewport={{ amount: 0.8 }}
              className="aspect-[5/4] overflow-hidden"
            >
              <img
                src={img09}
                srcSet={`${img09} 2x`}
                width={657}
                height={533}
                alt=""
                className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
            <figcaption className="mt-16 text-xs leading-[1.45] text-black/80">
              When Zara Origins launched its first two collection for the winter
              and summer seasons, the constantly evoluing project was defined by
              thes statement. After two editions allowing for experimentation
              within the collection, the approach for the third editon has
              evolved naturally solidifying Zara Origins as a yearlong offering
              of wardrobe essentials that will be supplemented with limited
              edition seasonal piece.
            </figcaption>
          </figure>
        </motion.div>

        <figure>
          <motion.div initial="offscreen" whileInView="onscreen">
            <motion.div
              variants={cardVariantsRight}
              viewport={{ amount: 0.8 }}
              className="aspect-[5/4] overflow-hidden"
            >
              <img
                src={img11}
                srcSet={`${img11} 2x`}
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
