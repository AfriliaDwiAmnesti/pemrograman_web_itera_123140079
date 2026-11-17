from abc import ABC, abstractmethod

class Bentuk(ABC):
    @abstractmethod
    def luas(self):
        pass

class Persegi(Bentuk):
    def __init__(self, sisi: float):
        self.sisi = sisi

    def luas(self) -> float:
        return self.sisi * self.sisi

if __name__ == "__main__":
    print("--- Uji Abstract Class ---")
    p = Persegi(5.0)
    print(f"Luas Persegi dengan sisi 5.0 adalah: {p.luas()}")
