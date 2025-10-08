import React from "react";
import NoteList from "../components/NoteList";
// import {getActiveNotes, getNote} from "../utils/local-data.js";
import {Link} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import SearchBar from "../components/SearchBar.jsx";
import {useSearchParams} from "react-router-dom";
import { getActiveNotes } from "../utils/network-data.js";


function HomePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });

    React.useEffect(() => {
        getActiveNotes().then(({data})  => {
            setNotes(data);
        })
    }, []);

    const onKeywordChangeHandler = (newKeyword) => {
        setKeyword(newKeyword);
        setSearchParams({keyword: newKeyword});
    }; 

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
            <section>
                <h2>Catatan Aktif</h2>
                <SearchBar
                    keyword={keyword}
                    keywordChange={onKeywordChangeHandler}/>
                {
                    filteredNotes.length > 0 ? (
                        <NoteList notes={filteredNotes} />
                    ) : (
                        <div className="notes-list-empty">
                        <p className="notes-empty-message">Tidak ada catatan</p>
                        </div>
                    )
                }
                <div className="add-new-page__action">
                    <Link to="/notes/new" className="action"><FaPlus/></Link>
                </div>
            </section>
    )
}

export default HomePage;
// function HomePageWrapper() {
//     const [searchParams, setSearchParams] = useSearchParams();

//     const keyword = searchParams.get('keyword');

//     function changeSearchParams(keyword) {
//         setSearchParams({keyword});
//     }

//     return <HomePage keyword={keyword} keywordChange={changeSearchParams}/>;
// }

// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             notes: getActiveNotes(),
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
//             })
        // if (notes === null || notes.length === 0) {
        //     return (
        //        <section>
               
        //         <h2>Catatan Aktif</h2>
        //         <SearchBar
        //             keyword={this.state.keyword}
        //             keywordChange={this.onKeywordChangeHandler}/>
                // <div className="notes-list-empty">
                //     <p className="notes-empty-message">Tidak ada catatan</p>
                // </div>
        //        </section>
        //     );
        // }
//         return (
            // <section>
            //     <h2>Catatan Aktif</h2>
            //     <SearchBar
            //         keyword={this.state.keyword}
            //         keywordChange={this.onKeywordChangeHandler}/>
                
            //     <NoteList notes={notes}/>

            //     <div className="add-new-page__action">
            //         <Link to="/notes/new" className="action"><FaPlus/></Link>
            //     </div>
            // </section>
//         );
//     }
// }

// export default HomePageWrapper;