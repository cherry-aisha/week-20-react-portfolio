import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
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
  if (currentPage === 'Resume') {
    return <Resume />;
  }
}

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='page'>
      {}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {}
      {renderPage()}
      <Footer/>
    </div>
  );
}
