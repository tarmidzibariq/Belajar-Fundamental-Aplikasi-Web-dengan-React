import React from "react";
import {Link} from "react-router-dom";
import {FiLogOut} from 'react-icons/fi';
import { LuSun, LuMoon } from "react-icons/lu";
import ThemeContext from "../contexts/themeContext";

function Navigation({logout, name}) {
    const { theme, toggleTheme} = React.useContext(ThemeContext);
    return (
        <>
        <h1><Link to='/'>Notes App</Link> </h1>
        <nav className="navigation">
            <ul>
            <>
                <li>
                 <button onClick={toggleTheme} className="toggle-theme">{theme === 'dark' ? <LuSun /> : <LuMoon />}</button>
                </li>

            </>
                {logout && (
                <>
                    <li>
                        <Link to="/archives">Archive</Link>
                    </li>
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