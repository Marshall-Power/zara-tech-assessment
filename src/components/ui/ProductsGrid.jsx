const modules = import.meta.glob("../../assets/img/grid/grid*.jpg", {
  eager: true,
});
const images = Object.keys(modules)
  .sort()
  .map((k) => modules[k].default);

export default function GridSection({ title = "Productos" }) {
  return (
    <section className="mx-auto max-w-[1900px] px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-[28px] mb-24 w-full text-center">{title}</h2>
      <div
        className="
        grid gap-4 md:gap-6
        grid-cols-2 sm:grid-cols-3
        lg:[grid-template-columns:repeat(5,305px)] lg:justify-center
      "
      >
        {images.map((src, i) => (
          <figure key={i} className="overflow-hidden">
            <div className="aspect-[2/3]">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
