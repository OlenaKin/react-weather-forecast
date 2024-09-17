import React from 'react';
import Header from './components/Header';
import CityList from './components/CityList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="overall-container">
      <Header />
      <main>
        <CityList />
        <Footer />
      </main>
    </div>
  );
}

export default App;
