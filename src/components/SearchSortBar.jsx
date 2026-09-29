import { COLS } from '../utils/helpers.js';

export default function SearchSortBar({ q, setQ, sort, setSort }) {
  return (
    <div className="bar">
      <input
        aria-label="Search"
        placeholder="Search by roll number or name"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <select aria-label="Sort by" value={sort.by} onChange={(e) => setSort({ ...sort, by: e.target.value })}>
        {COLS.map(([key, label]) => <option key={key} value={key}>Sort: {label}</option>)}
      </select>
      <select aria-label="Order" value={sort.dir} onChange={(e) => setSort({ ...sort, dir: +e.target.value })}>
        <option value="1">Ascending</option>
        <option value="-1">Descending</option>
      </select>
    </div>
  );
}
