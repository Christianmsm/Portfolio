import React, { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Project from './Project';

function Header() {

    const headingName = 'Christian Smith'

    return (
        <div>
        <h1>{headingName}</h1>
        </div>
    )
};

export default Header;