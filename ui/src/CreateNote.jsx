import React, { useState } from 'react';

export default function CreateNote({ API_URL, onNoteCreated }) {
    const [description, setDescription] = useState('');

    if (response.ok && onNoteCreated) {
        onNoteCreated();
        setDescription('');
    }

    return (
        <section>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Notes</button>
        </section>
    );
}
