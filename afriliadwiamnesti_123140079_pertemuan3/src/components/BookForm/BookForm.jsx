import React, { useState, useEffect } from 'react';
import { useBookContext } from '../../context/BookContext';
import './BookForm.css';

export function BookForm() {
  const { addBook, updateBook, editingBook, setEditingBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('milik');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setStatus(editingBook.status);
    } else {
      setTitle(''); setAuthor(''); setStatus('milik'); setErrors({});
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!title.trim()) errs.title = 'Judul buku wajib diisi!';
    if (!author.trim()) errs.author = 'Nama penulis wajib diisi!';
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    if (editingBook) {
      updateBook(editingBook.id, { title, author, status });
    } else {
      addBook({ title, author, status });
    }
    setTitle(''); setAuthor(''); setStatus('milik'); setErrors({});
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h3>{editingBook ? '✏️ Edit Buku' : '➕ Tambah Buku Baru'}</h3>
      <div className="form-group">
        <label>Judul Buku *</label>
        <input type="text" value={title} onChange={e => { setTitle(e.target.value); if(errors.title) setErrors({...errors, title: ''}); }} className={errors.title ? 'input-error' : ''} placeholder="Judul buku" />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>
      <div className="form-group">
        <label>Penulis *</label>
        <input type="text" value={author} onChange={e => { setAuthor(e.target.value); if(errors.author) setErrors({...errors, author: ''}); }} className={errors.author ? 'input-error' : ''} placeholder="Nama penulis" />
        {errors.author && <span className="error-message">{errors.author}</span>}
      </div>
      <div className="form-group">
        <label>Status Buku</label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="milik">Milik Pribadi</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-submit">{editingBook ? 'Simpan' : 'Tambah'}</button>
        {editingBook && <button type="button" className="btn-cancel" onClick={() => setEditingBook(null)}>Batal</button>}
      </div>
    </form>
  );
}
