import { useEffect, useState } from "react";
import api from "../api/api";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    api.get("/users").then(res => setUsers(res.data));
  }, []);

  const createTask = async () => {
    if (!title || !assignedTo) {
      alert("Please fill required fields");
      return;
    }

    await api.post("/tasks/create-task", {
      title,
      description,
      assignedTo,
    });

    alert("Task created successfully");
    setTitle("");
    setDescription("");
    setAssignedTo("");
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>

      <div className="admin-card">
        <div className="form-group">
          <label>Task Title *</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Assign To *</label>
          <select
            value={assignedTo}
            onChange={e => setAssignedTo(e.target.value)}
          >
            <option value="">Select user</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.role})
              </option>
            ))}
          </select>
        </div>

        <button className="task-button" onClick={createTask}>
          Create Task
        </button>
      </div>
    </div>
  );
}
