import os
from flask import jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId

from app.model import Teacher, Class
from app.services import verify_user_email, verify_request_data, update_time_data, get_items_data

load_dotenv()

STR_CONNECTION = os.getenv('DB_STR_CONNECTION')
client = MongoClient(STR_CONNECTION)

db = client['SmarTeach']
db_collections = db.list_collection_names()
app_collections = ['Professores', 'Alunos', 'Admin', 'Turmas']

if db_collections != app_collections:
    for collection_name in app_collections:
        if collection_name not in db_collections:
            db.create_collection(collection_name)

teacher_collection = db.get_collection('Professores')
student_collection = db.get_collection('Alunos')
admin_collection = db.get_collection('Admin')
classes_collection = db.get_collection('Turmas')


def insert_new_teacher(data: dict):

    is_wrong_data = Teacher.verify_new_teacher_data(data)  

    if is_wrong_data: 
        return is_wrong_data, 400

    new_teacher = Teacher(**data)

    is_same_email = verify_user_email(data["email"], teacher_collection.find({}))

    if is_same_email: 
        return is_same_email, 400

    teacher_collection.insert_one(new_teacher.__dict__)

    return 'Novo Professor registrado com sucesso!', 200


def get_available_teachers():

    teacher_list = get_items_data(teacher_collection.find({}))

    return jsonify(teacher_list), 200


def delete_teachers_profiles(data):

    email_teacher = {"email": data["email"] }
    
    if verify_user_email(data.get('email'), teacher_collection.find({})):
        teacher_collection.delete_one(email_teacher)

        return 'Perfil de Professor deletado com sucesso!', 200
    
    else:
        return 'Usuário inexistente', 400
    

def update_teacher_profile(data):

    wrong_data_request = verify_request_data(data, teacher_collection)
    if wrong_data_request: 
        return wrong_data_request, 400

    user_id = data.get('id')

    for key in data.keys():

        if key != 'id':
            new_values = {"$set": {key: data[key]} }
            teacher_collection.update_one({'_id' : ObjectId(user_id)}, new_values)
    
    teacher_collection.update_one({'_id' : ObjectId(user_id)}, update_time_data())

    return 'Perfil de Professor atualizado com sucesso!', 200



def insert_new_class(data):

    is_wrong_data = Class.verify_new_class_data(data, classes_collection.find({}))  

    if is_wrong_data: 
        return is_wrong_data, 400

    new_class = Class(**data)

    classes_collection.insert_one(new_class.__dict__)

    return 'Nova turma registrada com sucesso!', 200


def get_available_classes():
    classes_list = get_items_data(classes_collection.find({}))
    return jsonify(classes_list), 200
    