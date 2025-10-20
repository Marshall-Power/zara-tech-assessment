import * as motion from "motion/react-client";
import img03 from "../../assets/img/img03.jpg";

export default function SectionTwo() {
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
              src={img03}
              srcSet={`${img03} 2x`}
              width={875}
              height={1081}
              alt=""
              className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        </figure>

        <div className="flex justify-end flex-col translate-y-[5%]">
          <p className="text-xs leading-tight uppercase text-left w-full">
            ZARA ORIGINS
          </p>
          <p className="text-xs text-left w-full">#Permanent Collection</p>
          <p className="text-xs leading-[1.45] text-left w-full">
            Zara Origins is a project focused upon building a contemporary
            wardrobe. The aim is to conceive, create and offer garments which
            are newly-refined archetypes of their kind, fabricated in the finest
            materials, and manufactured with high standards of expertise and
            craft. It harnesses progressive desing to combine modern concepts
            with outstanding valve.
          </p>
        </div>
      </div>
    </section>
  );
}
