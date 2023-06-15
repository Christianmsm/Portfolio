import React, { useState } from 'react';
import Navigation from './Navigation';

function Header({currentPage, handlePageChange}) {

    const headingName = 'Christian Smith'

    return (
        <header>
        <h1>{headingName}</h1>
        <Navigation handlePageChange={handlePageChange} />
        </header>
    )
};

export default Header;