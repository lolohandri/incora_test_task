import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl">MySite</button>
            <div role="tablist" className="tabs tabs-boxed">
                <NavLink to='/' role="tab"
                         className={({isActive}) => isActive ? "tab tab-active" : "tab"}>Home</NavLink>
                <NavLink to='/users' role="tab"
                         className={({isActive}) => isActive ? "tab tab-active" : "tab"}>Users</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
