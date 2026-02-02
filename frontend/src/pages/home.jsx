import { useEffect, useState } from "react";
import api from "../api/api";
import SDLCColumn from "../components/sdlccolumn.jsx";
import HistoryModal from "../components/historymodel.jsx";

const stages = ["Backlog", "Todo", "In Progress", "Testing", "Done"];

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = () => {
    api.get("/tasks").then(res => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">SDLC Task Board</h2>

      <div className="kanban-wrapper">
        {stages.map(stage => (
          <SDLCColumn
            key={stage}
            title={stage}
            tasks={tasks.filter(t => t.sdlcStage === stage)}
            refresh={fetchTasks}
            openHistory={setSelectedTask}
          />
        ))}
      </div>

      <HistoryModal
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
      />
    </div>
  );
}
