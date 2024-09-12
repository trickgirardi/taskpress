"use client";

import { useState } from 'react';

export default function AddTask() {
    const [taskName, setTaskName] = useState("");
    const [taskList, setTaskList] = useState([]);
    
    const handleAddTask = () => {
        if (taskName) {
            setTaskList(prevTasks => [...prevTasks, { name: taskName, completed: false }]);
            setTaskName('');
        }
    }

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }; 

    const toggleTaskCompletion = (index) => {
        setTaskList(prevTasks => 
            prevTasks.map((task, i) => 
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (index) => {
        setTaskList(prevTasks => [
            ...prevTasks.slice(0, index),
            ...prevTasks.slice(index + 1),
        ]);
    };

    return (
        <div className='flex flex-col items-center justify-around h-full w-m bg-zinc-800 rounded-md p-3'>
            <p className='m-3 text-white'>TASKS</p>
            <ul className='m-3 p-3 w-full h-full border border-zinc-500 bg-zinc-900 rounded-md'>
                {taskList.map((task, index) => (
                    <li className='flex flex-row justify-between items-center text-white border-b border-b-zinc-500 mt-2 mb-2' key={index}>
                        <p onClick={() => toggleTaskCompletion(index)}  style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='hover:cursor-pointer'>{task.name}</p>
                        <div className=' flex flex-row gap-2'>
                            <button className='text-zinc-500 text-center'>edit</button>
                            <button onClick={() => deleteTask(index)} className=' text-center text-rose-400'>x</button>
                        </div>
                    </li>
                ))}
            </ul>
            <input className='text-center m-3 bg-zinc-300 rounded-sm focus:outline-none' type='text' value={taskName} onChange={handleChange} placeholder='Enter new task' />
            <button className='m-3 mt-0 rounded text-center bg-slate-700 p-3 text-slate-200' onClick={handleAddTask}>Create task</button>
        </div>
    )
}