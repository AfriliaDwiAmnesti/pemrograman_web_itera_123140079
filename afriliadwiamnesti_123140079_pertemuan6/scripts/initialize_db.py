from pyramid_mahasiswa.models.matakuliah import Matakuliah

# Tambahkan di dalam fungsi setup models:
mk1 = Matakuliah(kode_mk='IF2110', nama_mk='Algoritma dan Pemrograman', sks=4, semester=2)
mk2 = Matakuliah(kode_mk='IF3140', nama_mk='Pemrograman Web', sks=3, semester=5)
mk3 = Matakuliah(kode_mk='IF3210', nama_mk='Basis Data', sks=3, semester=4)

dbsession.add_all([mk1, mk2, mk3])
