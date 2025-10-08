import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import Navigation from "./Navigation";
import NotFound from "../pages/NotFound";
import ArchivesPage from "../pages/ArchivesPage";
import {getUserLogged, putAccessToken} from "../utils/network-data";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

function NoteApp() {
    const [authedUser, setAuthedUser] = React.useState(null);
    const [ initializing, setInitializing ] = React.useState(true);
    const checkLogin = async() => {
        const {data} = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
    };

    async function onLoginSuccess({accessToken}) {
        putAccessToken(accessToken);
        await checkLogin(); 
    }

    function onLogout(){
        setAuthedUser(null);
        putAccessToken('');
    }

    // Menggunakan useEffect untuk mengecek login saat aplikasi dimuat pertama kali
    React.useEffect(() => {
        checkLogin(); 

    }, []);

    if (initializing) {
        return null;
    }
    if (authedUser === null) {
        return (
            <div className="app-container">
                <header>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route
                            path='/*'
                            element={<LoginPage loginSuccess={onLoginSuccess} />} />
                        <Route path='/register' element={<RegisterPage />}/>
                    </Routes>
                </main>
            </div>

        );
    }
    return (
        <div className="app-container">
            <header>
                <Navigation logout={onLogout} name={authedUser.name}/>
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