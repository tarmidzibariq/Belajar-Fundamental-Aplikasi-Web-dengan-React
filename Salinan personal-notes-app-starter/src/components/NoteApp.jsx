import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import NotFound from "../pages/NotFound";
import ArchivesPage from "../pages/ArchivesPage";
function NoteApp() {
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