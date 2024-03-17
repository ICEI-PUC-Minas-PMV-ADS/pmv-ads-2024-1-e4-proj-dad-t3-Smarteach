import os
from flask import jsonify
from pymongo import MongoClient
from dotenv import load_dotenv

from app.model import Teacher

load_dotenv()

STR_CONNECTION = os.getenv('DB_STR_CONNECTION')
client = MongoClient(STR_CONNECTION)

db = client['SmarTeach']
db_collections = db.list_collection_names()
app_collections = ['Professores', 'Alunos', 'Admin', 'Aulas', 'Email']

if db_collections != app_collections:
    for collection_name in app_collections:
        if collection_name not in db_collections:
            db.create_collection(collection_name)

teacher_collection = db.get_collection('Professores')
student_collection = db.get_collection('Alunos')
admin_collection = db.get_collection('Admin')
content_collection = db.get_collection('Aulas')

def insert_new_teacher(data: dict):

    is_wrong_data = Teacher.verify_new_teacher_data(data)  

    if is_wrong_data: 
        return is_wrong_data, 400

    new_teacher = Teacher(**data)

    is_same_email = verify_user_email(data["email"], teacher_collection)

    if is_same_email: 
        return is_same_email, 400

    teacher_collection.insert_one(new_teacher.__dict__)

    return 'Novo Professor registrado com sucesso!', 200

def get_available_teachers():

    available_teachers = teacher_collection.find({})
    teacher_list = [teacher for teacher in available_teachers]

    for index, elt in enumerate(teacher_list):
        teacher_list[index] = {x: elt[x] for x in elt if x != '_id'}

    response = teacher_list
    return jsonify(response), 200

def delete_teachers_profiles(data):

    email_teacher = {"email": data["email"] }
    
    if verify_user_email(data["email"], teacher_collection):
        teacher_collection.delete_one(email_teacher)
        return 'Perfil de Professor deletado com sucesso!', 200
    else:
        return 'Email inexistente', 400
    
def verify_user_email(email, collection):

    data_verification = collection.find({})
    teacher_list = [teacher for teacher in data_verification]
    for teacher in teacher_list:
        if teacher["email"] == email:
            return 'Email já cadastrado!'