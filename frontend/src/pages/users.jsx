import { useEffect, useState } from "react";
import api from "../api/api";

export default function User() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
  }, []);

  useEffect(() => {
    if (!selectedUser) return;

    api.get("/tasks").then(res => {
      const filtered = res.data.filter(
        t => t.assignedTo?._id === selectedUser
      );
      setTasks(filtered);
    });
  }, [selectedUser]);

  return (
    <div className="user-container">
      <h2 className="user-title">User Tasks</h2>

      <div className="user-card">
        <div className="form-group">
          <label>Select User</label>
          <select onChange={e => setSelectedUser(e.target.value)}>
            <option value="">Choose user</option>
            {users.map(u => (
              <option key={u._id} value={u._id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>

        <div className="task-list">
          {tasks.length === 0 && selectedUser && (
            <p className="empty-text">No tasks assigned</p>
          )}

          {tasks.map(task => (
            <div key={task._id} className="user-task-card">
              <h4>{task.title}</h4>
              <span className={`status-badge ${task.sdlcStage.replace(" ", "-").toLowerCase()}`}>
                {task.sdlcStage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
