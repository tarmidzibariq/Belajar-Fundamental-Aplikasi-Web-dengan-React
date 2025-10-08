import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function AddPage() {
    const navigate = useNavigate();

    async function addNoteHandler(note) {
        await addNote(note);
        navigate("/");
    }
    return (
        <section>
            <NoteInput addNote={addNoteHandler} />
        </section>
    );
}

export default AddPage;