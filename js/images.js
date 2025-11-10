// images.js - SVG placeholders as data URIs
export function sampleImages(){
  const svg1 = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23051b2b'/><text x='60' y='120' fill='%23ffd9de' font-size='40'>JDM Project</text></svg>`)}`;
  const svg2 = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%2304152a'/><text x='60' y='120' fill='%23dfefff' font-size='40'>German Engineering</text></svg>`)}`;
  const svg3 = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%2306131b'/><text x='60' y='120' fill='%23fff4d6' font-size='40'>Tunagem BR</text></svg>`)}`;
  const svg4 = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%2306131b'/><text x='60' y='120' fill='%23fff4d6' font-size='40'>Americanos</text></svg>`)}`;
  return [svg1, svg2, svg3, svg4];
}
