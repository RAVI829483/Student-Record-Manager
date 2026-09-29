import HowItWorks from './HowItWorks.jsx';

export default function Header() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const dark = root.dataset.theme === 'dark' ||
      (!root.dataset.theme && matchMedia('(prefers-color-scheme:dark)').matches);
    root.dataset.theme = dark ? 'light' : 'dark';
  };

  return (
    <header className="hero">
      <div className="wrap">
        <div className="top">
          <div>
            <h1>Student Record Manager</h1>
            <p>Add, search, sort and delete student records. Powered by a custom hash map and merge sort.</p>
          </div>
          <div className="acts">
            <HowItWorks />
            <button className="tg" onClick={toggleTheme}>Light / Dark</button>
          </div>
        </div>
      </div>
    </header>
  );
}
