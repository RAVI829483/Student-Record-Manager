export const COLS = [['roll', 'Roll'], ['name', 'Student'], ['course', 'Course'], ['marks', 'Marks']];

export const SEED = [
  { roll: '101', name: 'Aarav Sharma', course: 'B.Tech CSE', marks: 88 },
  { roll: '102', name: 'Diya Verma', course: 'BCA', marks: 92 },
  { roll: '103', name: 'Kabir Singh', course: 'B.Sc Maths', marks: 67 },
  { roll: '104', name: 'Meera Patel', course: 'B.Tech CSE', marks: 75 },
  { roll: '105', name: 'Rohan Das', course: 'BBA', marks: 38 },
];

export const grade = (m) => (m >= 90 ? 'A+' : m >= 80 ? 'A' : m >= 70 ? 'B' : m >= 60 ? 'C' : m >= 40 ? 'D' : 'F');
export const initials = (n) => n.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
export const hue = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 0);
