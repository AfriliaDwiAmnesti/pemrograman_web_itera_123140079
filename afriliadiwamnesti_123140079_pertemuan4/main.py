import math_operations
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin, PI

print("--- PENGUJIAN MODUL MATH_OPERATIONS ---")
print(f"Konstanta PI yang digunakan: {PI}\n")

sisi = 5.0
print(f"Persegi (Sisi = {sisi}):")
print(f"- Luas    : {math_operations.luas_persegi(sisi)}")
print(f"- Keliling: {math_operations.keliling_persegi(sisi)}")

panjang, lebar = 10.0, 4.0
print(f"\nPersegi Panjang (Panjang = {panjang}, Lebar = {lebar}):")
print(f"- Luas    : {math_operations.luas_persegi_panjang(panjang, lebar)}")
print(f"- Keliling: {math_operations.keliling_persegi_panjang(panjang, lebar)}")

jari_jari = 7.0
print(f"\nLingkaran (Jari-jari = {jari_jari}):")
print(f"- Luas    : {math_operations.luas_lingkaran(jari_jari):.2f}")
print(f"- Keliling: {math_operations.keliling_lingkaran(jari_jari):.2f}")

suhu_c = 30.0
print(f"\nKonversi Suhu ({suhu_c} °C):")
print(f"- Fahrenheit : {celsius_ke_fahrenheit(suhu_c):.2f} °F")
print(f"- Kelvin     : {celsius_ke_kelvin(suhu_c):.2f} K")
