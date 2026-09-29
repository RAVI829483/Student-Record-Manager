import StudentRow from './StudentRow.jsx';
import { COLS } from '../utils/helpers.js';

export default function StudentTable({ list, total, how, sort, onSort, onDelete }) {
  const arrow = (key) => (sort.by === key ? (sort.dir > 0 ? '▲' : '▼') : '');

  return (
    <>
      <p className="how">
        {how || `Showing ${list.length} of ${total} records, ordered by merge sort, O(n log n).`}
      </p>
      <div className="tw">
        <table>
          <thead>
            <tr>
              {COLS.map(([key, label]) => (
                <th key={key} aria-sort={sort.by === key ? (sort.dir > 0 ? 'ascending' : 'descending') : 'none'}>
                  <button onClick={() => onSort(key)}>{label} {arrow(key)}</button>
                </th>
              ))}
              <th>Grade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.length ? (
              list.map((s) => <StudentRow key={s.roll} student={s} onDelete={onDelete} />)
            ) : (
              <tr>
                <td colSpan="6" className="empty">
                  {total ? 'No student matches that search.' : 'No records yet. Add your first student on the left.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
