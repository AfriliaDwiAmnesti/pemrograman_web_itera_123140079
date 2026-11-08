print("--- PROGRAM PENGHITUNG BODY MASS INDEX (BMI) ---")

berat = 45.0
tinggi = float(input("Masukkan tinggi badan (m), contoh 1.55: "))

bmi = berat / (tinggi * tinggi)

if bmi < 18.5:
    kategori = "Berat badan kurang"
elif 18.5 <= bmi < 25:
    kategori = "Berat badan normal"
elif 25 <= bmi < 30:
    kategori = "Berat badan berlebih"
else:
    kategori = "Obesitas"

print(f"\nBerat Badan    : {berat} kg")
print(f"Nilai BMI Anda : {bmi:.2f}")
print(f"Kategori Status: {kategori}")
