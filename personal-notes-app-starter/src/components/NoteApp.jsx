import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import NotFound from "../pages/NotFound";
import ArchivesPage from "../pages/ArchivesPage";
import { getUserLogged } from "../utils/network-data";
import RegisterPage from "../pages/RegisterPage";


function NoteApp() {
    const [ authedUser, setAuthedUser] = React.useState(null);
 
    if(authedUser === null){
        return(
            <div className="app-container">
                <header>
                    <Navigation/>
                </header>
                <main>
                    <Routes>
                        <Route path='/*' element={<h1>Login</h1>}/>
                        <Route path='/register' element={<RegisterPage/>}/>
                    </Routes>
                </main>
            </div>
            
        );
    }
    return (
        <div className="app-container">
            <header>
                <Navigation/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={< HomePage />}/>
                    <Route path="/notes/:id" element={< DetailPage />}/>
                    <Route path="/notes/new" element={< AddPage />}/>
                    <Route path="/archives" element={< ArchivesPage />}/>
                    <Route path="*" element={< NotFound />}/>
                </Routes>
            </main>
        </div>
    );
}

export default NoteApp;