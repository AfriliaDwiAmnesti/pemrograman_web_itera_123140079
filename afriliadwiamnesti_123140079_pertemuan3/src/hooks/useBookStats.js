import { useMemo } from 'react';

export function useBookStats(books = []) {
  return useMemo(() => ({
    total: books.length,
    milik: books.filter(b => b.status === 'milik').length,
    baca: books.filter(b => b.status === 'baca').length,
    beli: books.filter(b => b.status === 'beli').length,
  }), [books]);
}
