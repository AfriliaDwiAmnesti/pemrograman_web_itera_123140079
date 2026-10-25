import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import { Home } from './pages/Home/Home';
import { Stats } from './pages/Stats/Stats';
import './App.css';

export default function App() {
  return (
    <BookProvider>
      <Router>
        <div className="app-layout">
          <header className="navbar">
            <div className="nav-brand">
              <h1>📖 Book Tracker</h1>
              <span className="user-info">AFRILIA - 123140079</span>
            </div>
            <nav className="nav-links">
              <Link to="/">Beranda</Link>
              <Link to="/stats">Statistik</Link>
            </nav>
          </header>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>Tugas Manajemen Buku &copy; 2026 AFRILIA (123140079)</p>
          </footer>
        </div>
      </Router>
    </BookProvider>
  );
}
