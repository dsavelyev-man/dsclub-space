const random = (min, max) => {
  min = Math.ceil(min);
  max = max ? Math.floor(max + 1) : 0;
  return Math.floor(Math.random() * (max - min) + min);
}

export default random
