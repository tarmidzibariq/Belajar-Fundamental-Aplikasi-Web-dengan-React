import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import NoteDelete from "../components/NoteDelete";
import NoteArchive from "../components/NoteArchive";
import NoteUnarchive from "../components/NoteUnarchive";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this);
  }

  componentDidUpdate(prevProps) {
    // jika id di URL berubah, ambil ulang note
    if (prevProps.id !== this.props.id) {
      this.setState({ note: getNote(this.props.id) });
    }
  }

  onDeleteHandler() {
    const { id, navigate } = this.props;
    deleteNote(id);
    navigate("/"); 
  }

  onArchiveHandler = () => {
    const { id, navigate } = this.props;
    archiveNote(id);
    navigate("/archives");
  };

  onUnarchiveNote = () => {
    const { id, navigate } = this.props;
    unarchiveNote(id);
    navigate("/");
  };

  render() {
    const { note } = this.state;

    if (!note) {
      return (
        <section className="detail-page">
          <h1>404</h1>
          <p>Note not found</p>
        </section>
      );
    }

    return (
      <section className="detail-page">
        <h1>{note.title}</h1>
        <p className="detail-page__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="detail-page__body">{note.body}</p>

        <div className="add-new-page__action">
         
          {!note.archived ? (
            <NoteArchive id={note.id} onArchive={this.onArchiveHandler} />
          ) : (
            <NoteUnarchive id={note.id} onUnarchive={this.onUnarchiveNote} />
          )}
           <NoteDelete id={note.id} onDelete={this.onDeleteHandler} />
        </div>
      </section>
    );
  }
}

export default DetailPageWrapper;
