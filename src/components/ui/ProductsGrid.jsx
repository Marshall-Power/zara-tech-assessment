import { motion } from "framer-motion";

export function GridSection({ title = "Productos", images }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      className="mx-auto max-w-[1900px] px-4 md:px-6 py-8 md:py-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <h2 className="text-[28px] mb-24 w-full text-center uppercase">
        {title}
      </h2>
      <div
        className="
        grid gap-4 md:gap-6
        grid-cols-2 sm:grid-cols-3
        lg:[grid-template-columns:repeat(5,1fr)] lg:justify-center
      "
        variants={container}
      >
        {images.map((src, i) => (
          <motion.figure key={i} className="overflow-hidden" variants={item}>
            <div className="aspect-[2/3]">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </div>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}
