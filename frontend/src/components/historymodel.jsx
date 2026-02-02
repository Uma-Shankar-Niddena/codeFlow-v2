export default function HistoryModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h3>{task.title} – History</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {task.history.length === 0 && (
            <p className="empty-text">No changes yet</p>
          )}

          <ul className="history-list">
            {task.history.map((h, index) => (
              <li key={index} className="history-item">
                <div className="history-flow">
                  <span className="stage from">{h.from}</span>
                  <span className="arrow">→</span>
                  <span className="stage to">{h.to}</span>
                </div>
                <small className="history-time">
                  {new Date(h.changedAt).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
