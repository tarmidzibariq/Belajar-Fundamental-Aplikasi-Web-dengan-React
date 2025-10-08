import React from "react";
import {getArchivedNotes} from "../utils/network-data";
import NoteList from "../components/NoteList";
import {useSearchParams} from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import {Link} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import LocaleContext from "../contexts/LocaleContext.js";

function ArchivesPage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const { locale} = React.useContext(LocaleContext);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        getArchivedNotes().then(({data})  => {
            setNotes(data);
            setLoading(false);
        })
    }, []);

    const onKeywordChangeHandler = (newKeyword) => {
        setKeyword(newKeyword);
        setSearchParams({keyword: newKeyword});
    }; 

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    if (loading) {
        return (
        <section className="detail-page">
            <p>Loading...</p>
        </section>
        );
    }

    return (
            <section>
                <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archive Note'}</h2>
                <SearchBar
                    keyword={keyword}
                    keywordChange={onKeywordChangeHandler}/>
                {
                    filteredNotes.length > 0 ? (
                        <NoteList notes={filteredNotes} />
                    ) : (
                        <div className="notes-list-empty">
                        <p className="notes-empty-message">{locale === 'id' ? 'Tidak Ada Catatan' : 'No Notes'}</p>
                        </div>
                    )
                }
                <div className="add-new-page__action">
                    <Link to="/notes/new" className="action"><FaPlus/></Link>
                </div>
            </section>
    )
}

export default ArchivesPage;
// function ArchivesPageWrapper() {
//     const [searchParams,
//         setSearchParams] = useSearchParams();

//     const keyword = searchParams.get('keyword');

//     function changeSearchParams(keyword) {
//         setSearchParams({keyword});
//     }

//     return <ArchivesPage keyword={keyword} keywordChange={changeSearchParams}/>;
// }

// class ArchivesPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             notes: getArchivedNotes(),
//             keyword: props.keyword || ''
//         };
//         this.onKeywordChangeHandler = this
//             .onKeywordChangeHandler
//             .bind(this);
//     }
//     onKeywordChangeHandler(keyword) {
//         this.setState(() => {
//             return {keyword}
//         })

//         this
//             .props
//             .keywordChange(keyword);
//     }

//     render() {
//         const notes = this
//             .state
//             .notes
//             .filter((note) => {
//                 return note
//                     .title
//                     .toLowerCase()
//                     .includes(this.state.keyword.toLowerCase());
//             });
//         if (notes === null || notes.length === 0) {
//             return (
//                 <section>
//                     <h2 className="notes-list-title">Arsip</h2>
//                     <SearchBar
//                         keyword={this.state.keyword}
//                         keywordChange={this.onKeywordChangeHandler}/>
//                     <div className="notes-list-empty">
//                         <p className="notes-empty-message">Tidak ada catatan</p>
//                     </div>
//                 </section>
//             );
//         }

//         return (
//             <section>
//                 <h2 className="notes-list-title">Arsip</h2>
//                 <SearchBar
//                     keyword={this.state.keyword}
//                     keywordChange={this.onKeywordChangeHandler}/>

//                 <NoteList notes={notes}/>
//             </section>
//         );
//     }
// }
// export default ArchivesPageWrapper;