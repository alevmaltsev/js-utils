function getColorWithOpacity(color, opacity) {
  if(!opacity) return color;
  if(!color) return void 0;
  color = color.slice(1);
  return `rgba(${parseInt(color.slice(0,2), 16)},${parseInt(color.slice(2,4), 16)},${parseInt(color.slice(4,6), 16)},${opacity})`;
}