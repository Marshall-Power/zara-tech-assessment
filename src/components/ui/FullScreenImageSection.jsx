import * as motion from "motion/react-client";

export function FullScreenImageSection({imgSrc}) {
  return (
    <motion.section
      className="relative flex items-center justify-center h-screen bg-black"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 4,
        scale: { type: "spring", visualDuration: 1.5, bounce: 0.6 },
      }}
    >
      <img
        width={1900}
        height={1080}
        src={imgSrc}
        srcSet={`${imgSrc} 2x`}
        sizes="100vw"
        alt=""
        className="absolute inset-0 w-full h-full max-w-[1900px] mx-auto object-cover object-center"
      />
      <div className="absolute z-10 text-white text-left right-[10%] top-[60%] -translate-y-1/2">
        <p className="text-[13px] font-sans">
          ZARA ORIGINS <br /> #Permanent Collection
        </p>
      </div>
    </motion.section>
  );
}
