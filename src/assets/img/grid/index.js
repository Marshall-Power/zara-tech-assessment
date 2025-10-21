const modules = import.meta.glob("./grid*.jpg", {
  eager: true,
});

export const gridImages = Object.keys(modules)
  .sort()
  .map((k) => modules[k].default);
