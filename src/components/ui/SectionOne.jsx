import * as motion from "motion/react-client";
import img01 from "../../assets/img/img01.jpg";

export default function SectionOne() {
  return (
    <section className="mx-auto max-w-[1552px] px-6 md:px-8 py-8 md:py-12">
      <div
        className="grid gap-6 md:gap-8
                      grid-cols-1
                      lg:[grid-template-columns:1fr_1fr_1fr_2.15fr]"
      >
        <div className="min-h-[200px] flex items-center">
          <p className="text-xs leading-[1.45]">ZARA ORIGINS</p>
        </div>

        <div className="min-h-[200px] flex items-center">
          <p className=" font-sans text-xs leading-[1.45] text-right">
            Identity by MSM paris Photography by Jaime Hakesworth Short movie
            directed by BYNT Script by David Scearce Produced by Canada
          </p>
        </div>

        <div className="min-h-[200px] flex items-center">
          <p className="text-xs leading-[1.45] text-right">
            inspired by Vivaldi's <br /> four seasons
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col"
        >
          <img
            width={648}
            height={800}
            src={img01}
            srcSet={`${img01} 2x`}
            sizes="(min-width: 1552px) 647px, (min-width: 1024px) 40vw, 100vw"
            alt=""
            className="block w-full h-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            loading="eager"
          />
          <figcaption className="mt-3 text-xs text-black/70 text-right">
            Picture by Jamie <br /> Hakesworth <br /> ZARA ORIGINS collection{" "}
            <br /> Tappei
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
