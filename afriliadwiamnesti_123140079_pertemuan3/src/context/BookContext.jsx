import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage('my_book_collection', []);
  const [editingBook, setEditingBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const addBook = (bookData) => {
    const newBook = { ...bookData, id: Date.now().toString() };
    setBooks([newBook, ...books]);
  };

  const updateBook = (id, updatedData) => {
    setBooks(books.map(b => b.id === id ? { ...b, ...updatedData } : b));
    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook, editingBook, setEditingBook, searchQuery, setSearchQuery, filterStatus, setFilterStatus }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = { children: PropTypes.node.isRequired };
export const useBookContext = () => useContext(BookContext);
