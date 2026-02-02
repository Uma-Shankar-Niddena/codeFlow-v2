import api from "../api/api";

const stages = ["Backlog", "Todo", "In Progress", "Testing", "Done"];

export default function TaskCard({ task, refresh, openHistory }) {

  const handleChange = async (e) => {
    await api.put(`/tasks/${task._id}/stage`, {
      stage: e.target.value
    });
    refresh();
  };

  return (
    <div
      className="task-card"
      onClick={() => openHistory(task)}
    >
      <div className="task-header">
        <strong className="task-title">{task.title}</strong>
        <span className={`task-stage ${task.sdlcStage.replace(" ", "-").toLowerCase()}`}>
          {task.sdlcStage}
        </span>
      </div>

      {task.description && (
        <p className="task-desc">{task.description}</p>
      )}

      <select
        className="task-select"
        value={task.sdlcStage}
        onClick={(e) => e.stopPropagation()}
        onChange={handleChange}
      >
        {stages.map(stage => (
          <option key={stage} value={stage}>
            {stage}
          </option>
        ))}
      </select>
    </div>
  );
}
