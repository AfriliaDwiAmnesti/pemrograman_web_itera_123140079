mahasiswa_list = [
    {"nama": "Afrilia Dwi", "nim": "123140079", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
    {"nama": "Budi Santoso", "nim": "121140001", "nilai_uts": 70, "nilai_uas": 65, "nilai_tugas": 75},
    {"nama": "Siti Rahma", "nim": "121140045", "nilai_uts": 95, "nilai_uas": 92, "nilai_tugas": 96},
    {"nama": "Andi Pratama", "nim": "121140088", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
    {"nama": "Dewi Lestari", "nim": "121140102", "nilai_uts": 78, "nilai_uas": 82, "nilai_tugas": 80}
]

print("--- TABEL REKAPITULASI NILAI MAHASISWA ---")
print(f"{'Nama':<15} | {'NIM':<12} | {'Nilai Akhir':<12} | {'Grade':<5}")
print("-" * 55)

mahasiswa_terproses = []

for mhs in mahasiswa_list:
    nilai_akhir = (0.30 * mhs["nilai_uts"]) + (0.40 * mhs["nilai_uas"]) + (0.30 * mhs["nilai_tugas"])
    
    if nilai_akhir >= 80:
        grade = "A"
    elif nilai_akhir >= 70:
        grade = "B"
    elif nilai_akhir >= 60:
        grade = "C"
    elif nilai_akhir >= 50:
        grade = "D"
    else:
        grade = "E"
        
    mhs_data = {
        "nama": mhs["nama"],
        "nim": mhs["nim"],
        "nilai_akhir": nilai_akhir,
        "grade": grade
    }
    mahasiswa_terproses.append(mhs_data)
    
    print(f"{mhs['nama']:<15} | {mhs['nim']:<12} | {nilai_akhir:<12.2f} | {grade:<5}")

mhs_tertinggi = max(mahasiswa_terproses, key=lambda x: x["nilai_akhir"])
mhs_terendah = min(mahasiswa_terproses, key=lambda x: x["nilai_akhir"])

print("-" * 55)
print(f"\nMahasiswa dengan Nilai Tertinggi:")
print(f"- {mhs_tertinggi['nama']} ({mhs_tertinggi['nim']}) - Nilai Akhir: {mhs_tertinggi['nilai_akhir']:.2f} (Grade {mhs_tertinggi['grade']})")

print(f"\nMahasiswa dengan Nilai Terendah:")
print(f"- {mhs_terendah['nama']} ({mhs_terendah['nim']}) - Nilai Akhir: {mhs_terendah['nilai_akhir']:.2f} (Grade {mhs_terendah['grade']})")
