class Mahasiswa:
    def __init__(self, nama: str, nim: str, jurusan: str, ipk: float):
        self.nama = nama
        self.nim = nim
        self.jurusan = jurusan
        self.ipk = ipk

    def cetak_profil(self):
        print(f"[OOP] {self.nama} ({self.nim}) - {self.jurusan} | IPK: {self.ipk}")

    def update_ipk(self, ipk_baru: float):
        if 0.0 <= ipk_baru <= 4.0:
            self.ipk = ipk_baru
            print(f"IPK {self.nama} berhasil diperbarui menjadi {self.ipk}")
        else:
            print("Peringatan: Nilai IPK harus berada pada rentang 0.0 s.d 4.0!")

if __name__ == "__main__":
    print("--- Eksekusi Paradigma OOP ---")
    mhs_oop = Mahasiswa("Afrilia Dwi Amnesti", "123140079", "Teknik Informatika", 3.80)
    mhs_oop.cetak_profil()
    mhs_oop.update_ipk(3.92)
    mhs_oop.cetak_profil()
