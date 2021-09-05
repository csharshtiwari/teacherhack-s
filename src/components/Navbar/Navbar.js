import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ handleLogout }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    iTeach
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/todo'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            To Do
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/review'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Review
                        </Link>
                    </li>
                    <li className='nav-item' style={{ cursor: "pointer" }}>
                        <img alt="logout" onClick={handleLogout} src="https://img.icons8.com/flat-round/30/000000/back--v1.png" />
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
