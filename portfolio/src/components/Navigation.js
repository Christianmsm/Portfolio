import React, { useState } from 'react';


function Navigation() {
    const aboutMe = 'About Me'
    const portfolio = 'Portfolio'
    const contactMe = 'Contact Me'
    const resume = 'Resume'
    return (
        <nav className='main-nav'>
            <ul>
            <li>{aboutMe}</li>
            <li>{portfolio}</li>
            <li>{contactMe}</li>
            <li>{resume}</li>
        </ul>
        </nav>
    );
};

export default Navigation;