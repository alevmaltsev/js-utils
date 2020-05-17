export function getRandomHexColor() {
  return '#' + Math.round(Math.random() * 2**(4*6)).toString(16);
}

