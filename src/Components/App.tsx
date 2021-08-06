import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LeftAside from './LeftAside/LeftAside';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
     <LeftAside/>
     <Footer/>
    </div>
  );
}

export default App;
