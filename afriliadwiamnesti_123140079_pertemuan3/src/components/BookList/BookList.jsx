import React from 'react';
import { useBookContext } from '../../context/BookContext';
import './BookList.css';

export function BookList() {
  const { books, searchQuery, filterStatus, setEditingBook, deleteBook } = useBookContext();
  const filtered = books.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter = filterStatus === 'all' || b.status === filterStatus;
    return matchSearch && matchFilter;
  });

  if (filtered.length === 0) return <div className="empty-state"><p>📚 Tidak ada buku ditemukan.</p></div>;

  return (
    <div className="book-grid">
      {filtered.map(book => (
        <div className="book-card" key={book.id}>
          <div className="book-card-header">
            <h4>{book.title}</h4>
            <span className={`badge badge-${book.status}`}>{book.status}</span>
          </div>
          <p className="author">Penulis: <span>{book.author}</span></p>
          <div className="book-card-actions">
            <button className="btn-edit" onClick={() => setEditingBook(book)}>Edit</button>
            <button className="btn-delete" onClick={() => deleteBook(book.id)}>Hapus</button>
          </div>
        </div>
      ))}
    </div>
  );
}
