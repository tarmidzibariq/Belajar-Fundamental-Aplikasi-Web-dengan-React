import React from "react";
import {Link} from "react-router-dom";
import {FiLogOut} from 'react-icons/fi';
import { LuSun, LuMoon } from "react-icons/lu";
import ThemeContext from "../contexts/themeContext";
import { MdGTranslate } from "react-icons/md";
import LocaleContext from "../contexts/LocaleContext";

function Navigation({logout, name}) {
    const { theme, toggleTheme} = React.useContext(ThemeContext);
    const { locale, toggleLocale} = React.useContext(LocaleContext);
    return (
        <>
        <h1><Link to='/'>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link> </h1>
        <nav className="navigation">
            <ul>
                { logout && (
                    <li>
                        <Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archive'}</Link>
                    </li>)
                }
            <>
                <li>
                 <button onClick={toggleLocale} className="toggle-locale"><MdGTranslate /></button>
                </li>
                <li>
                 <button onClick={toggleTheme} className="toggle-theme">{theme === 'dark' ? <LuSun /> : <LuMoon />}</button>
                </li>

            </>
                {logout && (
                <>
                    <li>
                        <button className="button-logout" onClick={logout}>{name} <FiLogOut/></button>
                    </li>
                    
                </>
                )}
            </ul>
        </nav>
        </>
    );
}
export default Navigation;