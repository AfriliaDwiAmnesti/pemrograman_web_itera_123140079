import { useMemo } from 'react';
 
export function useBookStats(books = []) {
  return useMemo(() => {
    const total = books.length;
    const owned = books.filter((b) => b.status === 'milik').length;
    const reading = books.filter((b) => b.status === 'baca').length;
    const wishlist = books.filter((b) => b.status === 'beli').length;

    const ownedPercentage = total > 0 ? Math.round((owned / total) * 100) : 0;
    const readingPercentage = total > 0 ? Math.round((reading / total) * 100) : 0;
    const wishlistPercentage = total > 0 ? Math.round((wishlist / total) * 100) : 0;

    return {
      total,
      owned,
      reading,
      wishlist,
      ownedPercentage,
      readingPercentage,
      wishlistPercentage,
    };
  }, [books]);
}
