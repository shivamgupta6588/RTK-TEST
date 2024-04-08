import { useState } from 'react';

const AddNote = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return; // Prevent adding empty notes
        onAdd(text);
        setText(''); // Clear the input field after adding the note
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new note..."
                value={text}
                onChange={handleChange}
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default AddNote;
