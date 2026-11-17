class Mahasiswa:
    universitas = "Institut Teknologi Sumatera"
    total_mahasiswa_terdaftar = 0

    def __init__(self, nama: str, nim: str, ipk: float = 0.0):
        self.nama = nama
        self.nim = nim
        self.ipk = ipk
        Mahasiswa.total_mahasiswa_terdaftar += 1

    def __str__(self) -> str:
        return f"Mahasiswa: {self.nama} (NIM: {self.nim}) | IPK: {self.ipk:.2f} | Kampus: {self.universitas}"

if __name__ == "__main__":
    mhs1 = Mahasiswa("Afrilia Dwi Amnesti", "123140079", 3.85)
    print(mhs1)
    print("Total Mahasiswa Terdaftar:", Mahasiswa.total_mahasiswa_terdaftar)
