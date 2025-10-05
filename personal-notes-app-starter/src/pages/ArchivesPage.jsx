import React from "react";
import {getArchivedNotes} from "../utils/local-data.js";
import NoteList from "../components/NoteList";
import {useSearchParams} from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";

function ArchivesPageWrapper() {
    const [searchParams,
        setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }

    return <ArchivesPage keyword={keyword} keywordChange={changeSearchParams}/>;
}

class ArchivesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes(),
            keyword: props.keyword || ''
        };
        this.onKeywordChangeHandler = this
            .onKeywordChangeHandler
            .bind(this);
    }
    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {keyword}
        })

        this
            .props
            .keywordChange(keyword);
    }

    render() {
        const notes = this
            .state
            .notes
            .filter((note) => {
                return note
                    .title
                    .toLowerCase()
                    .includes(this.state.keyword.toLowerCase());
            });
        if (notes === null || notes.length === 0) {
            return (
                <section>
                    <h2 className="notes-list-title">Arsip</h2>
                    <SearchBar
                        keyword={this.state.keyword}
                        keywordChange={this.onKeywordChangeHandler}/>
                    <div className="notes-list-empty">
                        <p className="notes-empty-message">Tidak ada catatan</p>
                    </div>
                </section>
            );
        }

        return (
            <section>
                <h2 className="notes-list-title">Arsip</h2>
                <SearchBar
                    keyword={this.state.keyword}
                    keywordChange={this.onKeywordChangeHandler}/>

                <NoteList notes={notes}/>
            </section>
        );
    }
}
export default ArchivesPageWrapper;