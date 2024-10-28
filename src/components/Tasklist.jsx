"use client";

import { useState } from "react";

export default function Tasklist() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (taskName) {
      if (editIndex !== null) {
        setTaskList((prevTasks) =>
          prevTasks.map((task, i) =>
            i === editIndex ? { ...task, name: taskName } : task
          )
        );
        setEditIndex(null);
      } else {
        setTaskList((prevTasks) => [
          ...prevTasks,
          { name: taskName, completed: false },
        ]);
      }
      setTaskName("");
    }
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const toggleTaskCompletion = (index) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTaskList((prevTasks) => [
      ...prevTasks.slice(0, index),
      ...prevTasks.slice(index + 1),
    ]);
  };

  const startEditTask = (index) => {
    setTaskName(taskList[index].name);
    setEditIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-around h-full w-screen max-w-xl bg-neutral-800 rounded-md p-3">
      <p className="m-3 text-white">TASKS</p>
      <ul className="m-3 p-3 w-full h-full border border-neutral-500 bg-neutral-900 rounded-md">
        {taskList.map((task, index) => (
          <li
            className="flex flex-row justify-between items-center text-white border-b border-b-neutral-500 mt-2 mb-2"
            key={index}
          >
            <p
              onClick={() => toggleTaskCompletion(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              className="hover:cursor-pointer"
            >
              {task.name}
            </p>
            <div className=" flex flex-row gap-2">
              <button
                onClick={() => startEditTask(index)}
                className="text-neutral-500 text-center"
              >
                edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="text-center text-rose-400"
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
      <input
        className="text-center m-3 bg-neutral-300 rounded-sm focus:outline-none"
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Enter new task"
      />
      <button
        className={`m-3 mt-0 rounded text-center p-3 text-slate-200 ${
          editIndex !== null ? "bg-yellow-600" : "bg-slate-700"
        }`}
        onClick={handleAddTask}
      >
        {editIndex !== null ? "Save Changes" : "Create Task"}
      </button>
    </div>
  );
}
