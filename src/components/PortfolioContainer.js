import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
}

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {}
      {renderPage()}
      <Footer/>
    </div>
  );
}
