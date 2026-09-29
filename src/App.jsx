import { useMemo, useState } from 'react';
import useStudents from './hooks/useStudents.js';
import { queryStudents } from './utils/query.js';
import Header from './components/Header.jsx';
import StatsCards from './components/StatsCards.jsx';
import StudentForm from './components/StudentForm.jsx';
import SearchSortBar from './components/SearchSortBar.jsx';
import StudentTable from './components/StudentTable.jsx';
import Toast from './components/Toast.jsx';

export default function App() {
  const { map, all, hasRoll, add, remove, restore } = useStudents();
  const [q, setQ] = useState('');
  const [sort, setSort] = useState({ by: 'roll', dir: 1 });
  const [toast, setToast] = useState(null);

  const { list, how } = useMemo(() => queryStudents(map, all, q, sort), [map, all, q, sort]);

  const notify = (t, ms) => { setToast(t); setTimeout(() => setToast(null), ms); };

  const handleAdd = (s) => { add(s); notify({ text: `Added ${s.name}` }, 3000); };
  const handleDelete = (s) => { remove(s); notify({ text: `Deleted ${s.name}`, undo: s }, 5000); };
  const handleUndo = () => { restore(toast.undo); setToast(null); };
  const handleSort = (key) =>
    setSort((s) => (s.by === key ? { by: key, dir: -s.dir } : { by: key, dir: 1 }));

  return (
    <div>
      <Header />
      <div className="wrap">
        <StatsCards all={all} />
        <div className="layout">
          <div>
            <StudentForm onAdd={handleAdd} hasRoll={hasRoll} />
          </div>
          <div className="card">
            <SearchSortBar q={q} setQ={setQ} sort={sort} setSort={setSort} />
            <StudentTable
              list={list}
              total={all.length}
              how={how}
              sort={sort}
              onSort={handleSort}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      <Toast toast={toast} onUndo={handleUndo} />
    </div>
  );
}
