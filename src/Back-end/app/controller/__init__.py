import os
from flask import jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId

from app.model import Teacher, Class, Student, Admin 
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


def delete_teacher_profile(data):

    email_teacher = {"email": data["email"] }
    
    if verify_user_email(data.get('email'), teacher_collection.find({})):
        teacher_collection.delete_one(email_teacher)

        return 'Perfil de Professor deletado com sucesso!', 200
    
    else:
        return 'Usuário inexistente', 400
    

def update_teacher_profile(data):

    wrong_data_request = verify_request_data(data, teacher_collection, 'PATCH')
    if wrong_data_request: 
        return wrong_data_request, 400

    user_id = data.get('id')

    for key in data.keys():

        if key != 'id':
            new_values = {"$set": {key: data[key]} }
            teacher_collection.update_one({'_id' : ObjectId(user_id)}, new_values)
    
    teacher_collection.update_one({'_id' : ObjectId(user_id)}, update_time_data())

    return 'Perfil de Professor atualizado com sucesso!', 200

def update_class(data):

    wrong_data_request = verify_request_data(data, classes_collection, 'PATCH')
    if wrong_data_request: 
        return wrong_data_request, 400

    class_id = data.get('id')

    for key in data.keys():

        if key != 'id':
            new_values = {"$set": {key: data[key]} }
            classes_collection.update_one({'_id' : ObjectId(class_id)}, new_values)
    
    classes_collection.update_one({'_id' : ObjectId(class_id)}, update_time_data())

    return 'Turma atualizada com sucesso', 200


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


def update_student_profile(data):
    
    wrong_data_request = verify_request_data(data, student_collection, 'PATCH')
    if wrong_data_request: 
        return wrong_data_request, 400

    user_id = data.get('id')

    for key in data.keys():

        if key != 'id':
            new_values = {"$set": {key: data[key]} }
            student_collection.update_one({'_id' : ObjectId(user_id)}, new_values)
    
    student_collection.update_one({'_id' : ObjectId(user_id)}, update_time_data())

    return 'Perfil de Estudante atualizado com sucesso!', 200


def delete_student_profile(data):

    wrong_data_request = verify_request_data(data, student_collection)
    if wrong_data_request: 
        return wrong_data_request, 400
    
    user_id = data.get('id')
    student_collection.delete_one({"_id": ObjectId(user_id) })

    return 'Perfil de Estudante deletado com sucesso!', 200  

  
def delete_class(data):

    wrong_data = verify_request_data(data, classes_collection)
    if wrong_data:
        return wrong_data, 400
 
    class_id = {"_id": ObjectId(data.get("id"))}
    classes_collection.delete_one(class_id)

    return 'Turma removida com sucesso', 200
    
    
def insert_new_student(data: dict):
    is_wrong_data = Student.verify_student_data(data)
    
    if(is_wrong_data):
        return is_wrong_data, 400
    
    new_student = Student(**data)

    is_same_email = verify_user_email(data["email"], admin_collection.find({}))

    if is_same_email: 
        return is_same_email, 400
    
    student_collection.insert_one(new_student.__dict__)
    
    return 'Novo aluno cadastrado com sucesso!', 200

  
def insert_new_admin(data: dict):

    is_wrong_data = Admin.verify_new_admin_data(data)

    if is_wrong_data: 
        return is_wrong_data, 400

    new_Admin = Admin(**data)

    is_same_email = verify_user_email(data["email"], admin_collection.find({}))

    if is_same_email: 
        return is_same_email, 400

    admin_collection.insert_one(new_Admin.__dict__)

    return 'Novo Administrador registrado com sucesso!', 200

  
def get_available_admins():

    admin_list = get_items_data(admin_collection.find({}))
    return jsonify(admin_list), 200


def get_available_students():

    student_list = get_items_data(student_collection.find({}))

    return jsonify(student_list), 200
