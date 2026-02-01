
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';
import Contact from './pages/Contact';
import ThemeConfig from './pages/ThemeConfig';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostArticle from './pages/PostArticle';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post-article" element={<PostArticle />} />
            <Route path="/theme-config" element={<ThemeConfig />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
