
const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandom(5, 3));
