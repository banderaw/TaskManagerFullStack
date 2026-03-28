import React, { useEffect, useState } from 'react';
import API from '../api';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = () => {
        API.get('tasks/')
            .then(res => {
                console.log("API DATA:", res.data); // 🔍 DEBUG
                setTasks(res.data);
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="task-container">
            <h2>Tasks</h2>

            <TaskForm onTaskAdded={fetchTasks} />

            <div className="task-list">
                {Array.isArray(tasks) && tasks.length > 0 ? (
                    tasks.map((task) => (
                        task ? (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onDeleted={fetchTasks}
                                onUpdated={fetchTasks}
                            />
                        ) : null
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </div>
        </div>
    );
};

export default TaskList;