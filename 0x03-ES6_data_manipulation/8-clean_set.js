export default function cleanSet(set, startString) {
  const res = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') return '';
  set.forEach((el) => { if (typeof el === 'string' && el.startsWith(startString)) res.push(el.slice(startString.length)); });
  return res.join('-');
}
