export default function createIteratorObject(report) {
  const arr = [];
  for (const val of Object.values(report.allEmployees)) {
    arr.push(...val);
  }
  return arr;
}
