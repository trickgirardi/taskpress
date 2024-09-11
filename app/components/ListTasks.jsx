"use client";

import { useState } from 'react';

export default function AddTask() {
    const [taskName, setTaskName] = useState("");
    const [taskList, setTaskList] = useState([]);
    
    const handleAddTask = () => {
        if (taskName) {
            setTaskList(prevTasks => [...prevTasks, taskName]);
            setTaskName('');
        }
    }

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }; 

    return (
        <div>
            <p>TASKS</p>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input type='text' value={taskName} onChange={handleChange} placeholder='Enter new task' />
            <button onClick={handleAddTask}>Create task</button>
        </div>
    )
}