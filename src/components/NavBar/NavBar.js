import React from 'react';

const NavBar = () => {

    return(
        <>
            <nav className="navbar">
                <Link to={"/latest/page/:id"} >
                    <img className="bee-icon" alt="icon" src={icon}></img>
                </Link>
            </nav>
        </>
    )
}

export default NavBar;