import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className='relative flex h-16 items-center justify-evenly rounded-none bg-gray-800 py-5 mb-12'>
            <li className='bg-gray-800 p-1 text-white hover:text-gray-400'>
                <a
                href='#home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </a>
            </li> 
            {/* Need to update this link */}
            <li className='bg-gray-800 p-1 text-white hover:text-gray-400'>
                <a
                href='#About'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            {/* Need to update this link */}
            <li className='bg-gray-800 p-1 text-white hover:text-gray-400'>
                <a
                href='#ProjectContainer'
                onClick={() => handlePageChange('ProjectContainer')}
                className={currentPage === 'ProjectContainer' ? 'nav-link active' : 'nav-link'}
                >
                Projects
                </a>
            </li>
            {/* Need to update this link */}
            <li className='bg-gray-800 p-1 text-white hover:text-gray-400'>
                <a
                href='#Contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
        </ul>
    );
};

export default Navigation;