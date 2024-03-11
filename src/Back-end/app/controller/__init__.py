import os
from flask import jsonify
from pymongo import MongoClient
from dotenv import load_dotenv

from app.model import Teacher
from app.services import verify_new_teacher_data

load_dotenv()

STR_CONNECTION = os.getenv('DB_STR_CONNECTION')
client = MongoClient(STR_CONNECTION)

db = client[os.getenv('DB_NAME')]
db_collections = db.list_collection_names()
app_collections = ['Professores', 'Alunos', 'Admin', 'Conteudo']

for collection_name in app_collections:
    if collection_name not in db_collections:
        db.create_collection(collection_name)

teacher_collection = db.get_collection('Professores')
student_collection = db.get_collection('Alunos')
admin_collection = db.get_collection('Admin')
content_collection = db.get_collection('Conteudo')

def insert_new_teacher(data: dict):

    is_wrong_data = verify_new_teacher_data(data)  

    if is_wrong_data:
        return is_wrong_data, 400

    # new_teacher = Teacher(data['nome'],  data['disciplina'], data['turmas'], data['turno'])

    teacher_collection.insert_one(data)

    return 'Novo Professor registrado com sucesso!', 200

def get_available_teachers():

    available_teachers = teacher_collection.find({})
    teacher_list = [teacher for teacher in available_teachers]

    for index, elt in enumerate(teacher_list):
        teacher_list[index] = {x: elt[x] for x in elt if x != '_id'}

    response = teacher_list
    return jsonify(response), 200
