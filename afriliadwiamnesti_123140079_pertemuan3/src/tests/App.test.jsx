import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import App from '../App';

describe('Aplikasi Manajemen Buku Pribadi Tests', () => {
  it('1. Menampilkan header aplikasi dan identitas mahasiswa', () => {
    render(<App />);
    expect(screen.getByText(/Book Tracker/i)).toBeInDocument();
    expect(screen.getByText(/AFRILIA - 123140079/i)).toBeInDocument();
  });

  it('2. Menampilkan error validasi jika form kosong', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Tambah/i }));
    expect(screen.getByText(/Judul buku wajib diisi!/i)).toBeInDocument();
    expect(screen.getByText(/Nama penulis wajib diisi!/i)).toBeInDocument();
  });

  it('3. Berhasil menambahkan buku baru', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText(/Judul Buku \*/i), { target: { value: 'Belajar React' } });
    fireEvent.change(screen.getByLabelText(/Penulis \*/i), { target: { value: 'Afrilia' } });
    fireEvent.click(screen.getByRole('button', { name: /Tambah/i }));
    expect(screen.getByText('Belajar React')).toBeInDocument();
  });

  it('4. Navigasi ke halaman Statistik', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: /Statistik/i }));
    expect(screen.getByText(/Statistik Koleksi Buku/i)).toBeInDocument();
  });

  it('5. Pencarian buku', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/Cari judul atau penulis.../i), { target: { value: 'TidakAda' } });
    expect(screen.getByText(/Tidak ada buku ditemukan/i)).toBeInDocument();
  });
});
