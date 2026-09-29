import { useMemo, useRef, useState } from 'react';
import HashMap from '../utils/HashMap.js';
import { SEED } from '../utils/helpers.js';

const KEY = 'srm-vite';

// Owns the hash map, saves to localStorage, exposes add / remove / restore.
export default function useStudents() {
  const ref = useRef(null);
  if (!ref.current) {
    const map = new HashMap();
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* ignore */ }
    (Array.isArray(saved) ? saved : SEED).forEach((s) => map.set(s.roll, s));
    ref.current = map;
  }
  const map = ref.current;
  const [version, setVersion] = useState(0);

  const commit = () => {
    try { localStorage.setItem(KEY, JSON.stringify(map.values())); } catch (e) { /* ignore */ }
    setVersion((v) => v + 1);
  };

  const all = useMemo(() => map.values(), [version]);

  return {
    map,
    all,
    hasRoll: (roll) => map.has(roll),
    add: (s) => { map.set(s.roll, s); commit(); },
    remove: (s) => { map.delete(s.roll); commit(); },
    restore: (s) => { map.set(s.roll, s); commit(); },
  };
}
