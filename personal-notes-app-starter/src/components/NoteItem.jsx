import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteItem({title, createdAt, body, id}) {
    return (
        <div className="note-item">
            <Link to={`/notes/${id}`}>
                <h2 className="note-item__title">{title}</h2>
            </Link>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}
NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
export default NoteItem;