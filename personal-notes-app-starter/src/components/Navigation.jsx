import React from "react";
import {Link} from "react-router-dom";
function Navigation() {
    return (
        <>
        <h1><Link to='/'>Notes App</Link> </h1>
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/archives">Archive</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navigation;