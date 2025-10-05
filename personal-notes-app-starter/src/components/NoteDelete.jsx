import PropTypes from "prop-types";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function NoteDelete(props) {
    const { id, onDelete } = props;
    return <button className="action" onClick={() => onDelete(id)}><FaRegTrashAlt /></button>;
};

NoteDelete.propTypes = {
    id : PropTypes.string.isRequired,
    onDelete : PropTypes.func.isRequired
};

export default NoteDelete;