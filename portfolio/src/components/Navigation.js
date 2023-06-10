import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    const aboutMe = 'About Me'
    const portfolio = 'Portfolio'
    const contactMe = 'Contact Me'
    const resume = 'Resume'
    return (
        <>
        {aboutMe}
        {portfolio}
        {contactMe}
        {resume}
        </>
    );
};

export default Navigation;