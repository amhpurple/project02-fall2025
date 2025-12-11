import React, { useState } from 'react';

export default function Notes({ API_URL, refreshTrigger }) {
    async function fetchNotes() {
        const response = await fetch(`${API_URL}/todos`);
        const data = await response.json();
    }

    useEffect(() => {
        fetchNotes();
    }, [refreshTrigger]);

    return (
        <div className="notes-container">
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            <br />
                            {note.description}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
