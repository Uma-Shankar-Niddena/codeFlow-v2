import TaskCard from "./taskcard.jsx";

export default function SDLCColumn({ title, tasks, refresh, openHistory }) {
  return (
    <div className="sdlc-column">
      <div className="sdlc-column-header">
        <h3>{title}</h3>
        <span className="task-count">{tasks.length}</span>
      </div>

      <div className="sdlc-column-body">
        {tasks.length === 0 && (
          <p className="empty-text">No tasks</p>
        )}

        {tasks.map(task => (
          <TaskCard
            key={task._id}
            task={task}
            refresh={refresh}
            openHistory={openHistory}
          />
        ))}
      </div>
    </div>
  );
}
