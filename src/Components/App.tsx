import React from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Search from "./Search/Search";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
