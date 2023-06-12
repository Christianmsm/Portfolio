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
                href='#home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                Home
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