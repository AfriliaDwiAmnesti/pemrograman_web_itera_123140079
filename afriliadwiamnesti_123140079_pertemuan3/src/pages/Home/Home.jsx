import React from 'react';
import { BookForm } from '../../components/BookForm/BookForm';
import { BookFilter } from '../../components/BookFilter/BookFilter';
import { BookList } from '../../components/BookList/BookList';
import './Home.css';

export function Home() {
  return (
    <div className="home-container">
      <div className="home-sidebar"><BookForm /></div>
      <div className="home-content"><BookFilter /><BookList /></div>
    </div>
  );
}
