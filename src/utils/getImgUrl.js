function getImgUrl(name, path) {
  return new URL(`${path}/${name}`, import.meta.url).href;
}

export { getImgUrl };
