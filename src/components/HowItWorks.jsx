import { useEffect, useState } from 'react';

export default function HowItWorks() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button className="tg" onClick={() => setOpen(true)}>How it works</button>
      {open && (
        <div className="hw-back" onClick={() => setOpen(false)}>
          <div className="hw" role="dialog" aria-modal="true" aria-labelledby="hw-title" onClick={(e) => e.stopPropagation()}>
            <h2 id="hw-title">How it works</h2>
            <p><b>Hash map (chaining):</b> each student is stored by roll number. Adding, deleting and looking up a roll number takes O(1) on average. The table doubles in size when it is 75% full.</p>
            <p><b>Merge sort:</b> the table is ordered by any column in O(n log n). It is stable, so students with equal values keep their earlier order.</p>
            <p><b>Search:</b> an exact roll number is one hash lookup, O(1). A name search checks every student once, O(n).</p>
            <button className="btn" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
