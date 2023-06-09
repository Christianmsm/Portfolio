import React, { useState } from 'react';
import Home from './pages/Home';
import Navigation from "./Navigation";
import AboutMe from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Footer from './Footer';
import ProjectContainer from './pages/ProjectsContainer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <AboutMe />
        }
        if (currentPage === 'ProjectContainer') {
            return <ProjectContainer />
        }
        if (currentPage === 'Contact') {
            return <ContactForm />
        } 
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}