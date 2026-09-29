export default function StatsCards({ all }) {
  const avg = all.length ? (all.reduce((t, s) => t + s.marks, 0) / all.length).toFixed(1) : '–';
  const top = all.length ? all.reduce((a, b) => (b.marks > a.marks ? b : a)) : null;
  const passed = all.filter((s) => s.marks >= 40).length;

  return (
    <div className="stats">
      <div className="stat"><small>Students</small><span className="num">{all.length}</span></div>
      <div className="stat"><small>Average marks</small><span className="num">{avg}</span></div>
      <div className="stat">
        <small>Top scorer</small>
        <span className="num" style={{ fontSize: 17, lineHeight: '34px' }}>{top ? top.name : '–'}</span>
      </div>
      <div className="stat">
        <small>Passed students</small>
        <span className="num">{passed} <span className="sub" style={{ fontSize: 14, fontWeight: 400 }}>of {all.length}</span></span>
      </div>
    </div>
  );
}
