// Stable merge sort, O(n log n). cmp(a, b) < 0 means a comes first.
export default function mergeSort(arr, cmp) {
  if (arr.length < 2) return arr;
  const mid = arr.length >> 1;
  const left = mergeSort(arr.slice(0, mid), cmp);
  const right = mergeSort(arr.slice(mid), cmp);
  const out = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    out.push(cmp(left[i], right[j]) <= 0 ? left[i++] : right[j++]);
  }
  while (i < left.length) out.push(left[i++]);
  while (j < right.length) out.push(right[j++]);
  return out;
}
