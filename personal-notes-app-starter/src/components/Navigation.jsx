import React from "react";
import {Link} from "react-router-dom";
import {FiLogOut} from 'react-icons/fi';

function Navigation({logout, name}) {
    return (
        <>
        <h1><Link to='/'>Notes App</Link> </h1>
        <nav className="navigation">
            <ul>
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