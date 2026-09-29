import mergeSort from './mergeSort.js';

// Search (hash lookup or linear scan) followed by merge sort.
export function queryStudents(map, all, q, sort) {
  const text = q.trim();
  let list = all;
  let how = '';

  if (text && map.has(text)) {
    list = [map.get(text)];
    how = 'Exact roll number: found with one hash lookup, O(1).';
  } else if (text) {
    const lower = text.toLowerCase();
    list = all.filter((s) => s.name.toLowerCase().includes(lower) || s.roll.includes(text));
    how = 'Name search: one pass over the array, O(n).';
  }

  const { by, dir } = sort;
  const cmp = (a, b) =>
    (by === 'marks'
      ? a.marks - b.marks
      : String(a[by]).localeCompare(String(b[by]), undefined, { numeric: true, sensitivity: 'base' })) * dir;

  return { list: mergeSort(list, cmp), how };
}
