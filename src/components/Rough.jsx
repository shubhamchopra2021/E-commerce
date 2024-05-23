import React from "react";
import { useState } from "react";

const Rough = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleAddTask = () => {
    if (editId !== null) {
      const updatedtasks = [...tasks];
      updatedtasks[editId] = task;
      setTasks(updatedtasks);
      setTask("");
      setEditId(null);
    } else {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleEdit = (id) => {
    setTask(tasks[id]);
    setEditId(id);
  };
  const handleRemove = (id) => {
    const newlist = tasks.filter((_, index) => index !== id);
    setTasks(newlist);
  };
  return (
    <>
      <div className=" ml-[30%] ">
        <div className="p-10">
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="px-4 py-2 border-2 w-[400px] rounded md  "
            type="text"
            placeholder="Enter your task"
          />
          <button
            onClick={handleAddTask}
            className="px-4 ml-6 py-2 border-2 border-blue-400 text-blue-400 rounded-md"
          >
            {editId !== null ? "Update Task" : "Add Task"}
          </button>
        </div>
        {tasks.map((item, id) => (
          <div
            key={id}
            className="result p-2 mb-2 border-2 border-gray-200 flex items-center justify-center"
          >
            <h1 className="text-2xl font-semibold">{item}</h1>
            <button
              onClick={() => handleEdit(id)}
              className="px-4 ml-6 py-2 border-2 border-green-400 text-green-400 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => handleRemove(id)}
              className="px-4 ml-6 py-2 border-2 border-red-400 text-red-400 rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rough;
