class Hewan:
    def bersuara(self):
        pass

class Kucing(Hewan):
    def bersuara(self):
        return "Meow!"

class Anjing(Hewan):
    def bersuara(self):
        return "Guk Guk!"

if __name__ == "__main__":
    print("--- Uji Polimorfisme ---")
    hewan_list = [Kucing(), Anjing()]
    for h in hewan_list:
        print(f"Suara hewan: {h.bersuara()}")
