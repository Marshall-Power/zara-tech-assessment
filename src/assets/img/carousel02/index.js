const modules = import.meta.glob("./img*.jpg", {
  eager: true,
});

export const carouselImages2 = Object.keys(modules)
  .sort()
  .map((k) => modules[k].default);
