class RekeningBank:
    def __init__(self, no_rek: str, pemilik: str, saldo: float):
        self.no_rek = no_rek
        self._pemilik = pemilik
        self.__saldo = max(0.0, saldo)

    @property
    def saldo(self) -> float:
        return self.__saldo

if __name__ == "__main__":
    rek = RekeningBank("121009", "Afrilia Dwi Amnesti", 1000000)
    print("--- Uji Enkapsulasi ---")
    print(f"Pemilik : {rek._pemilik}")
    print(f"Saldo   : Rp {rek.saldo:,.2f}")
