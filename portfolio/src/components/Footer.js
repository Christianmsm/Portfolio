import React, { useState } from 'react';

function Footer() {

    const gitHubLink = 'GitHub'
    const linkedInLink = 'LinkedIn'
    const stackOverflowLink = 'Stack Overflow'
    const resumeLink = 'Resume'

    return (
        <footer className='flex flex-row place-content-center space-x-10'>
        <a className=' w-1/12'href='https://github.com/Christianmsm'>{gitHubLink}</a>
        <a href='https://www.linkedin.com/in/christian-smith-7a056526a/'>{linkedInLink}</a>
        <a href='https://stackoverflow.com/users/21651200/christianmsm'>{stackOverflowLink}</a>
        <a href='https://docs.google.com/document/d/1KBmpprIBby08YKE8O1frcf5K5I51hafZIejPkhwzi5c/edit?usp=sharing'>{resumeLink}</a>
        </footer>
    )
};

export default Footer;