class Kendaraan:
    def __init__(self, merek: str, model: str, tahun: int):
        self.merek = merek
        self.model = model
        self.tahun = tahun

    def deskripsi(self) -> str:
        return f"{self.merek} {self.model} ({self.tahun})"

class Mobil(Kendaraan):
    def __init__(self, merek: str, model: str, tahun: int, jumlah_pintu: int):
        super().__init__(merek, model, tahun)
        self.jumlah_pintu = jumlah_pintu

    def deskripsi(self) -> str:
        return f"{super().deskripsi()} [Mobil {self.jumlah_pintu} Pintu]"

if __name__ == "__main__":
    avanza = Mobil("Toyota", "Avanza", 2023, 5)
    print("--- Uji Pewarisan (Inheritance) ---")
    print(avanza.deskripsi())
