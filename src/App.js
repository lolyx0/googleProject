import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar />
        {/* Additional content can be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
