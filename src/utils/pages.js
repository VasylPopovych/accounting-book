export const countPages = (obj) => {
  const nubmerOfPages = Math.ceil(Object.keys(obj).length / 12);
  let pages = [];
  for (let i = 1; 1 < nubmerOfPages; i++) {
    pages.push(i);
  }
  return pages;
};
