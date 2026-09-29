import { grade, hue, initials } from '../utils/helpers.js';

export default function StudentRow({ student, onDelete }) {
  const g = grade(student.marks);
  return (
    <tr>
      <td className="num">{student.roll}</td>
      <td>
        <div className="who">
          <span className="av" style={{ background: `hsl(${hue(student.roll + student.name)},52%,45%)` }}>
            {initials(student.name)}
          </span>
          {student.name}
        </div>
      </td>
      <td>{student.course}</td>
      <td>
        <div className="mk">
          <span>{student.marks}</span>
          <i><b style={{ width: `${student.marks}%` }} /></i>
        </div>
      </td>
      <td><span className={`gr ${g.replace('+', 'p')}`}>{g}</span></td>
      <td>
        <button className="x" onClick={() => onDelete(student)} aria-label={`Delete ${student.name}`}>Delete</button>
      </td>
    </tr>
  );
}
