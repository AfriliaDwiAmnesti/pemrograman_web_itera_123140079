from pyramid.view import view_config
from ..models.matakuliah import Matakuliah
import json

@view_config(route_name='matakuliah_list', renderer='json', request_method='GET')
def matakuliah_list(request):
    dbsession = request.dbsession
    matakuliahs = dbsession.query(Matakuliah).all()
    return [mk.to_dict() for mk in matakuliahs]

@view_config(route_name='matakuliah_detail', renderer='json', request_method='GET')
def matakuliah_detail(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=mk_id).first()
    
    if not mk:
        request.response.status = 404
        return {'error': 'Mata kuliah tidak ditemukan'}
    
    return mk.to_dict()

@view_config(route_name='matakuliah_create', renderer='json', request_method='POST')
def matakuliah_create(request):
    try:
        json_body = request.json_body
    except json.JSONDecodeError:
        request.response.status = 400
        return {'error': 'Format JSON tidak valid'}

    kode_mk = json_body.get('kode_mk')
    nama_mk = json_body.get('nama_mk')
    sks = json_body.get('sks')
    semester = json_body.get('semester')

    if not all([kode_mk, nama_mk, sks, semester]):
        request.response.status = 400
        return {'error': 'Field wajib (kode_mk, nama_mk, sks, semester) harus diisi lengkap'}

    if not isinstance(sks, int) or sks <= 0 or not isinstance(semester, int) or semester <= 0:
        request.response.status = 400
        return {'error': 'Nilai sks dan semester harus berupa angka integer positif lebih dari 0'}

    dbsession = request.dbsession
    existing = dbsession.query(Matakuliah).filter_by(kode_mk=kode_mk).first()
    if existing:
        request.response.status = 400
        return {'error': 'Kode Mata Kuliah sudah terdaftar'}

    new_mk = Matakuliah(
        kode_mk=kode_mk,
        nama_mk=nama_mk,
        sks=sks,
        semester=semester
    )
    dbsession.add(new_mk)
    dbsession.flush()

    request.response.status = 201
    return new_mk.to_dict()

@view_config(route_name='matakuliah_update', renderer='json', request_method='PUT')
def matakuliah_update(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=mk_id).first()

    if not mk:
        request.response.status = 404
        return {'error': 'Mata kuliah tidak ditemukan'}

    try:
        json_body = request.json_body
    except json.JSONDecodeError:
        request.response.status = 400
        return {'error': 'Format JSON tidak valid'}

    sks = json_body.get('sks', mk.sks)
    semester = json_body.get('semester', mk.semester)

    if (isinstance(sks, int) and sks <= 0) or (isinstance(semester, int) and semester <= 0):
        request.response.status = 400
        return {'error': 'Nilai sks dan semester harus berupa angka integer positif lebih dari 0'}

    mk.kode_mk = json_body.get('kode_mk', mk.kode_mk)
    mk.nama_mk = json_body.get('nama_mk', mk.nama_mk)
    mk.sks = sks
    mk.semester = semester

    return mk.to_dict()

@view_config(route_name='matakuliah_delete', renderer='json', request_method='DELETE')
def matakuliah_delete(request):
    dbsession = request.dbsession
    mk_id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=mk_id).first()

    if not mk:
        request.response.status = 404
        return {'error': 'Mata kuliah tidak ditemukan'}

    dbsession.delete(mk)
    request.response.status = 200
    return {'message': 'Mata kuliah berhasil dihapus'}
