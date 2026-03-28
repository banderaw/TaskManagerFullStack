import React, { useState } from 'react';
import API from '../api';

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        API.post('tasks/', {
            title: title,
            description: description,
            completed: false,
            deadline: deadline
        })
        .then(res => {
            setTitle('');
            setDescription('');
            setDeadline('');
            onTaskAdded();   // refresh list
        })
        .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Task</h3>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <br />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />

            <br />

            <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
            />

            <br />

            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;