import React, { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Project from './Project';

function Header() {

    const headingName = 'Christian Smith'

    return (
        <>
        <h1>{headingName}</h1>
        <Navigation/>
        </>
    )
};

export default Header;