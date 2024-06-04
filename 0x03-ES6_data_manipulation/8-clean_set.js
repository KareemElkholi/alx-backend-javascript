export default function cleanSet(set, startString) {
  if (!startString) return '';
  const res = [];
  set.forEach((el) => { if (el.startsWith(startString)) res.push(el.slice(startString.length)); });
  return res.join('-');
}
