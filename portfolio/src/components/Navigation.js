import React, { useState } from 'react';


function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-items'>
                <a
                href='#home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </a>
            </li> 
            {/* Need to update this link */}
            <li className='nav-items'>
                <a
                href='#About'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            {/* Need to update this link */}
            <li className='nav-items'>
                <a
                href='#Portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            {/* Need to update this link */}
            <li className='nav-items'>
                <a
                href='#Contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
        </ul>
        // <nav>
        //     <ul className='flex flex-row justify-center space-x-40'>
        //     <li>{aboutMe}</li>
        //     <li>{portfolio}</li>
        //     <li>{contactMe}</li>
        //     <li>{resume}</li>
        // </ul>
        // </nav>
    );
};

export default Navigation;