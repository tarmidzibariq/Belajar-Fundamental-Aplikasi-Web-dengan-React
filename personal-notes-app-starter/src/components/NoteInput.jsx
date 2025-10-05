import React from "react";
import {FaCheck} from "react-icons/fa";
import PropTypes from "prop-types";
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onTitleChangeEventHandler = this
            .onTitleChangeEventHandler
            .bind(this);
        this.onBodyChangeEventHandler = this
            .onBodyChangeEventHandler
            .bind(this);
        this.onSubmitEventHandler = this
            .onSubmitEventHandler
            .bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxTitleLength = 50;
        if (event.target.value.length <= maxTitleLength) {
            this.setState(() => {
                return {title: event.target.value};
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {body: event.target.value};
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this
            .props
            .addNote(this.state);
    }
    render() {
        return (
            <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
                <input
                    className="add-new-page__input__title"
                    type="text"
                    placeholder="Catatan rahasia"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    required/>
                <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.title.length}</p>
                <textarea
                    className="add-new-page__input__body"
                    placeholder="Sebenarnya saya adalah..."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    required></textarea>
                <div className="add-new-page__action">
                    <button type="submit" className="action"><FaCheck/></button>
                </div>
            </form>
        )
    }
}
NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
};
export default NoteInput;