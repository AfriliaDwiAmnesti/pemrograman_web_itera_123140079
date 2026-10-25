# Laporan Praktikum Pemrograman Web - Personal Dashboard
**Aplikasi Student Productivity Dashboard**

## Identitas Praktikan
* **Nama Lengkap:** Afrilia Dwi Amnesti
* **NIM:** 123140079
* **Kelas Praktikum:** Kelas RA

---

## Penjelasan Singkat & Fitur
Aplikasi **Personal Dashboard** ini dirancang khusus untuk memenuhi kebutuhan produktivitas mahasiswa ITERA. Fitur utamanya meliputi:
1. **Widget Cuaca Real-time ITERA:** Mengambil data suhu langsung dari API publik Open-Meteo berbasis koordinat Lampung Selatan.
2. **Kutipan Motivasi Harian:** Menampilkan kutipan acak dari API DummyJSON Quotes untuk menyemangati hari kuliah.
3. **Manajemen Tugas Kuliah Interaktif:** Memungkinkan mahasiswa menambah, mengubah status, dan menghapus daftar tugas dengan dukungan penyimpanan lokal (`localStorage`).

---

## Daftar Fitur ES6+ yang Diimplementasikan
| Fitur ES6+ | Deskripsi / Implementasi dalam Kode | Lokasi File & Referensi |
| :--- | :--- | :--- |
| **`let` & `const`** | Digunakan secara konsisten untuk deklarasi variabel dan instansiasi kelas. | `script.js` (Baris 1-120) |
| **Arrow Functions** | Diimplementasikan lebih dari 3 fungsi (contoh: `loadInitialAPI`, `setupEventListeners`, `handleAddTask`). | `script.js` (Baris 18, 38, 45) |
| **Template Literals** | Digunakan untuk menyusun struktur HTML dinamis pada tabel daftar tugas dan widget. | `script.js` (Baris 89-112) |
| **Async / Await** | Mengambil data cuaca dan kutipan dari API publik secara asinkron. | `script.js` (Baris 19-35) |
| **Classes** | Menerapkan arsitektur OOP modern melalui `class TaskItem` dan `class DashboardApp`. | `script.js` (Baris 2-15) |
| **Destructuring & Spread** | Digunakan pada pembaruan status tugas dan immutability array state (`{ ...task, ... }`). | `script.js` (Baris 53, 58) |
