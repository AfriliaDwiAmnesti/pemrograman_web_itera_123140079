# Laporan Praktikum Pemrograman Web - Pertemuan 1
**Aplikasi Kasir & Keranjang Belanja Sederhana (Mini POS)**

## Identitas Praktikan
* **Nama Lengkap:** Afrilia Dwi Amnesti
* **NIM:** 123140079
* **Kelas Praktikum:** Kelas RA

---

## Deskripsi Aplikasi
Aplikasi **Mini POS** adalah sistem kasir berbasis web yang dirancang untuk kebutuhan kantin atau toko kampus. Aplikasi ini mengintegrasikan validasi input form, perhitungan kalkulator otomatis (subtotal, diskon otomatis, uang kembalian), serta manajemen data persisten menggunakan **LocalStorage** browser.

---

## Panduan Menjalankan
1. Buka repository GitHub ini.
2. Unduh atau clone proyek, lalu jalankan file `index.html` menggunakan Live Server di VS Code atau buka langsung via web browser.

---

## Daftar Fitur yang Diimplementasikan
- [x] **Validasi Form Input:** Pengecekan nama barang ($\ge$ 3 karakter), harga minimal Rp 500, dan qty minimal 1 dengan pesan error merah interaktif.
- [x] **Kalkulator Otomatis:** Perhitungan subtotal per baris, total belanja, diskon otomatis, serta kalkulator uang kembalian.
- [x] **Manajemen Keranjang & LocalStorage:** Tabel interaktif, fitur hapus item, tombol reset transaksi, serta sinkronisasi data dengan `localStorage`.
- [x] **Desain Responsif:** Antarmuka modern menggunakan Tailwind CSS.
