import React from 'react';
import { useBookContext } from '../../context/BookContext';
import './BookFilter.css';

export function BookFilter() {
  const { searchQuery, setSearchQuery, filterStatus, setFilterStatus } = useBookContext();
  return (
    <div className="book-filter-container">
      <div className="search-box">
        <input type="text" placeholder="🔍 Cari judul atau penulis..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      </div>
      <div className="filter-buttons">
        <button className={filterStatus === 'all' ? 'active' : ''} onClick={() => setFilterStatus('all')}>Semua</button>
        <button className={filterStatus === 'milik' ? 'active' : ''} onClick={() => setFilterStatus('milik')}>Milik</button>
        <button className={filterStatus === 'baca' ? 'active' : ''} onClick={() => setFilterStatus('baca')}>Dibaca</button>
        <button className={filterStatus === 'beli' ? 'active' : ''} onClick={() => setFilterStatus('beli')}>Beli</button>
      </div>
    </div>
  );
}
