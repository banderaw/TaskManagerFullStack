import React from 'react';
import API from '../api';

const TaskItem = ({ task, onDeleted, onUpdated }) => {

    // 🛑 Prevent crash if task is undefined
    if (!task) return null;

    const handleDelete = () => {
        API.delete(`tasks/${task.id}/`)
            .then(() => onDeleted())
            .catch(err => console.error(err));
    };

    const toggleComplete = () => {
        API.put(`tasks/${task.id}/`, {
            ...task,
            completed: !task.completed
        })
        .then(() => onUpdated())
        .catch(err => console.error(err));
    };

    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            
            <div className="task-content">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
            </div>

            <div className="task-buttons">
                <button 
                    className="complete-btn"
                    onClick={toggleComplete}
                >
                    {task.completed ? 'Undo' : 'Complete'}
                </button>

                <button 
                    className="delete-btn"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>

        </div>
    );
};

export default TaskItem;