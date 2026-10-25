# Tugas Pertemuan 3: Aplikasi Manajemen Buku Pribadi

**Nama:** AFRILIA  
**NIM:** 123140079  

---

## 📖 Deskripsi Aplikasi
Aplikasi berbasis web React untuk mencatat dan mengelola koleksi buku pribadi (buku milik, sedang dibaca, atau ingin dibeli/wishlist). Data disimpan secara persisten menggunakan `localStorage`.

## ⚙️ Fitur Utama & Teknologi
- **State Management:** Menggunakan Context API (`BookContext`).
- **Custom Hooks:** `useLocalStorage` (untuk persistensi data) dan `useBookStats` (untuk kalkulasi statistik).
- **Routing:** Multi-halaman menggunakan `react-router-dom` (Beranda & Statistik).
- **Form Validation & Error Handling:** Validasi kolom wajib isi dengan feedback visual.
- **Unit Testing:** 5 unit test menggunakan Vitest & React Testing Library.

## 🚀 Cara Menjalankan
1. Clone repository ini.
2. Jalankan `npm install` untuk memasang dependensi.
3. Jalankan `npm run dev` untuk mode development (lokal).
4. Jalankan `npm run test` untuk menjalankan unit testing.
