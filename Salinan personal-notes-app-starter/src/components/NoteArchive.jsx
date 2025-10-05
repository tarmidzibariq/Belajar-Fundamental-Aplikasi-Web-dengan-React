import PropTypes from "prop-types";
import React from "react";
import { MdOutlineArchive } from "react-icons/md";

function NoteArchive(props) {
    const { id, onArchive } = props;
    return <button className="action" onClick={() => onArchive(id)}><MdOutlineArchive /></button>;
};

NoteArchive.propTypes = {
    id : PropTypes.string.isRequired,
    onArchive : PropTypes.func.isRequired
};

export default NoteArchive;
