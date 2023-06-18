import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
function Footer() {


    return (
        <div className='insert-x-0 top-0'>
        <footer className='relative flex h-16 items-center justify-evenly rounded-none bg-gray-800 mt-12'>
        <a className='w-1/12 bg-gray-800 p-1 text-white hover:text-gray-400'href='https://github.com/Christianmsm'><GitHubIcon />GitHub</a>
        <a className='w-1/12 bg-gray-800 p-1 text-white hover:text-gray-400' href='https://www.linkedin.com/in/christian-smith-7a056526a/'><LinkedInIcon />LinkedIn</a>
        <a className='bg-gray-800 p-1 text-white hover:text-gray-400'href='https://stackoverflow.com/users/21651200/christianmsm'><StackedBarChartIcon />Stack overflow</a>
        <a className='w-1/12 bg-gray-800 p-1 text-white hover:text-gray-400' href='https://docs.google.com/document/d/1KBmpprIBby08YKE8O1frcf5K5I51hafZIejPkhwzi5c/edit?usp=sharing'><DownloadIcon />Resume</a>
        </footer>
        </div>
    )
};

export default Footer;