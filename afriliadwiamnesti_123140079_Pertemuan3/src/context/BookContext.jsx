import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const BookContext = createContext();

const INITIAL_BOOKS = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'milik', // 'milik' | 'baca' | 'beli'
    year: '2018',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    status: 'baca',
    year: '2019',
    createdAt: new Date().toISOString(),
  },
];

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('afrilia_books_data', INITIAL_BOOKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const addBook = (bookData) => {
    const newBook = {
      id: Date.now().toString(),
      ...bookData,
      createdAt: new Date().toISOString(),
    };
    setBooks((prev) => [newBook, ...prev]);
  };

  const updateBook = (id, updatedData) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, ...updatedData } : book))
    );
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
        searchQuery,
        setSearchQuery,
        statusFilter,
        setStatusFilter,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks harus digunakan di dalam BookProvider');
  }
  return context;
}
