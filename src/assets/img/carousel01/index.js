const modules = import.meta.glob("./img*.jpg", {
  eager: true,
});


export const carouselImages1 = Object.keys(modules)
  .sort()
  .map((k) => modules[k].default);
