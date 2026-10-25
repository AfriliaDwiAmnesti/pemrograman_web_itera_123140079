import React from 'react';
import { useBookContext } from '../../context/BookContext';
import { useBookStats } from '../../hooks/useBookStats';
import './Stats.css';

export function Stats() {
  const { books } = useBookContext();
  const { total, milik, baca, beli } = useBookStats(books);
  return (
    <div className="stats-container">
      <h2>📊 Statistik Koleksi Buku</h2>
      <div className="stats-grid">
        <div className="stat-card card-total"><h3>Total Buku</h3><p className="stat-value">{total}</p></div>
        <div className="stat-card card-milik"><h3>Milik</h3><p className="stat-value">{milik}</p></div>
        <div className="stat-card card-baca"><h3>Dibaca</h3><p className="stat-value">{baca}</p></div>
        <div className="stat-card card-beli"><h3>Beli</h3><p className="stat-value">{beli}</p></div>
      </div>
    </div>
  );
}
