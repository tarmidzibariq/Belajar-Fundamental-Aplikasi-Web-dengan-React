import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { showFormattedDate } from "../utils";
import NoteDelete from "../components/NoteDelete";
import NoteArchive from "../components/NoteArchive";
import NoteUnarchive from "../components/NoteUnarchive";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, [id]);

  const onDeleteHandler = async() => {
    await deleteNote(id);
    navigate("/");
  };

  const onArchiveHandler = async() => {
    await archiveNote(id);
    navigate("/archives");
  };

  const onUnarchiveHandler = async() => {
    await unarchiveNote(id);
    navigate("/");
  };

  if (loading) {
    return (
      <section className="detail-page">
        <p>Loading...</p>
      </section>
    );
  }

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
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>

      <div className="add-new-page__action">
        {!note.archived ? (
          <NoteArchive id={note.id} onArchive={onArchiveHandler} />
        ) : (
          <NoteUnarchive id={note.id} onUnarchive={onUnarchiveHandler} />
        )}
        <NoteDelete id={note.id} onDelete={onDeleteHandler} />
      </div>
    </section>
  );
}

export default DetailPage;
