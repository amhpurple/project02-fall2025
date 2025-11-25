import React, { useState, useEffect } from 'react';

export default function Todos({ API_URL, refreshTrigger }) {
    const [todoList, setTodoList] = useState([]);

    async function fetchTodos() {
        const response = await fetch(`${API_URL}/todos`);
        const data = await response.json();
        setTodoList(data);
    }

    useEffect(() => {
        fetchTodos();
    }, [refreshTrigger]);

    return (
        <div className="todos-container">
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            {todo.completed ? (
                                <span>Completed</span>
                            ) : (
                                <span>In Progress</span>
                            )}{' '}
                            {todo.title}
                            <br />
                            {todo.description}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}