export function getRandomHexColor() {
  return '#' + Math.round(Math.random() * 2**(4*6)).toString(16);
}

function getInversion(part) {
  return (parseInt('ff', 16) - parseInt(part, 16)).toString(16);
}

export function getInverseColor(color) {
  color = color.slice(1);
  return '#' + [getInversion(color.slice(0,2)), getInversion(color.slice(2,4)), getInversion(color.slice(4,6)) ].join('');
}

export function getInverseColorPair() {
  const color = getRandomHexColor();
  return [color, getInverseColor(color)];
}