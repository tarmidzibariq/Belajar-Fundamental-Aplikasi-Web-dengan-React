import PropTypes from "prop-types";
import React from "react";
import { MdOutlineUnarchive } from "react-icons/md";

function NoteUnarchive(props) {
    const { id, onUnarchive } = props;
    return <button className="action" onClick={() => onUnarchive(id)}><MdOutlineUnarchive /></button>;
};

NoteUnarchive.propTypes = {
    id : PropTypes.string.isRequired,
    onUnarchive : PropTypes.func.isRequired
};

export default NoteUnarchive;
