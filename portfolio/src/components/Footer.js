import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
function Footer() {


    return (
        <footer className='flex flex-row place-content-center space-x-10'>
        <a className=' w-1/12'href='https://github.com/Christianmsm'><GitHubIcon />GitHub</a>
        <a href='https://www.linkedin.com/in/christian-smith-7a056526a/'><LinkedInIcon />LinkedIn</a>
        <a href='https://stackoverflow.com/users/21651200/christianmsm'><StackedBarChartIcon />Stack overflow</a>
        <a href='https://docs.google.com/document/d/1KBmpprIBby08YKE8O1frcf5K5I51hafZIejPkhwzi5c/edit?usp=sharing'><DownloadIcon />Resume</a>
        </footer>
    )
};

export default Footer;