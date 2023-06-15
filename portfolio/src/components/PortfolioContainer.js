import React, { useState } from 'react';
import Navigation from "./Navigation";
import AboutMe from "./pages/About";
import ContactForm from "./pages/ContactForm";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        // if (currentPage === 'Home') {
        //     return <Home />;
        // }
        if (currentPage === 'About') {
            return <AboutMe />
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
        </div>
    )
}