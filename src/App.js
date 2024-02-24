// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // If you're using React Router
import Categories from "./components/Categories";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TodaysDeal from "./components/TodaysDeal";
import WebsiteBuilder from "./components/WebsiteBuilder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Footer />
        <Routes>
          <Route path="/" exact component={Navbar} />
          <Route path="categories" exact component={Categories} />
          <Route path="/websiteBuilder" component={WebsiteBuilder} />
          <Route path="/todaysDeal" component={TodaysDeal} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
