export default function Toast({ toast, onUndo }) {
  if (!toast) return null;
  return (
    <div className="toast" role="status">
      <span>{toast.text}</span>
      {toast.undo && <button onClick={onUndo}>Undo</button>}
    </div>
  );
}
