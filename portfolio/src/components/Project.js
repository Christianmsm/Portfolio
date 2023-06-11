import React, { useState } from 'react';

function Project() {
    const myProjects = 'This is where the projects will go';
    const projectLink = 'https://www.putasporkinit.co/'
    return (
        <div>
            <li>
            <h1>{myProjects}</h1>
            <img 
            alt="A food website that gives you recipes from various movies, & tv shows"
            className='project-image'
            src={projectLink}></img>
            </li>
        </div>
    );
};

export default Project;  