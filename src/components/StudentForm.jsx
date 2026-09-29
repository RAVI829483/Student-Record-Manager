import { useState } from 'react';

const EMPTY = { roll: '', name: '', course: '', marks: '' };

export default function StudentForm({ onAdd, hasRoll }) {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState('');

  const submit = () => {
    const roll = form.roll.trim();
    const name = form.name.trim();
    const course = form.course.trim();
    const marks = parseFloat(form.marks);

    if (!roll || !name || !course || isNaN(marks)) return setError('Fill in every field before adding.');
    if (marks < 0 || marks > 100) return setError('Marks must be between 0 and 100.');
    if (hasRoll(roll)) return setError(`Roll number ${roll} already exists. Use a different one.`);

    onAdd({ roll, name, course, marks });
    setForm(EMPTY);
    setError('');
  };

  const field = (key, label, placeholder, type = 'text') => (
    <>
      <label htmlFor={key}>{label}</label>
      <input
        id={key}
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
      />
    </>
  );

  return (
    <div className="card">
      <h2>Add a student</h2>
      {field('roll', 'Roll number', 'e.g. 106')}
      {field('name', 'Full name', 'e.g. Isha Rao')}
      {field('course', 'Course', 'e.g. B.Tech CSE')}
      {field('marks', 'Marks (0–100)', 'e.g. 84', 'number')}
      <div className="err" role="alert">{error}</div>
      <button className="btn" onClick={submit}>Add student</button>
    </div>
  );
}
